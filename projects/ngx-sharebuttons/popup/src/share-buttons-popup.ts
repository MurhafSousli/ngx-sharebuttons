import { Component, ChangeDetectionStrategy, Inject, Optional, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import { OverlayRef } from '@angular/cdk/overlay';
import { SHARE_POPUP_OPTIONS, SharePopupOptions } from './share-buttons-popup.model';

@Component({
  selector: 'share-buttons-popup',
  templateUrl: './share-buttons-popup.html',
  styleUrls: ['./share-buttons-popup.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'tabindex': '-1',
    'aria-modal': 'true',
    '[attr.role]': 'role',
    '[attr.aria-labelledby]': 'ariaLabel ? null : ariaLabelledBy',
    '[attr.aria-label]': 'ariaLabel',
    '[attr.aria-describedby]': 'ariaDescribedBy || null'
  }
})
export class ShareButtonsPopup implements AfterViewInit, OnDestroy {

  /** Overlay ref to close the lightbox */
  overlayRef: OverlayRef;

  /** The ARIA role of the lightbox element. */
  role: string;

  /** Aria label to assign to the lightbox element */
  ariaLabel: string;

  /** ID of the element that should be considered as the lightbox's label. */
  ariaLabelledBy: string;

  /** ID of the element that describes the lightbox. */
  ariaDescribedBy: string;

  /** The class that traps and manages focus within the lightbox. */
  private _focusTrap: FocusTrap;

  /** Element that was focused before the lightbox was opened. Save this to restore upon close. */
  private _elementFocusedBeforeDialogWasOpened: HTMLElement;

  get isBtnCopy(): boolean {
    return this.options.exclude && this.options.exclude.filter((btn: string) => btn === 'copy').length > 0;
  }

  constructor(@Optional() @Inject(DOCUMENT) private _document: any,
              @Optional() @Inject(SHARE_POPUP_OPTIONS) public options: SharePopupOptions,
              private _focusTrapFactory: FocusTrapFactory,
              private _elementRef: ElementRef) {
    this._savePreviouslyFocusedElement();
  }

  ngAfterViewInit() {
    this._trapFocus();
  }

  /** Callback, invoked whenever an animation on the host completes. */
  ngOnDestroy() {
    this.overlayRef.dispose();
    this._restoreFocus();
  }

  /** Moves the focus inside the focus trap. */
  private _trapFocus() {
    if (!this._focusTrap) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    }
    // If were to attempt to focus immediately, then the content of the lightbox would not yet be
    // ready in instances where change detection has to run first. To deal with this, we simply
    // wait for the microtask queue to be empty.
    this._focusTrap.focusInitialElementWhenReady();
  }

  /** Saves a reference to the element that was focused before the lightbox was opened. */
  private _savePreviouslyFocusedElement() {
    if (this._document) {
      this._elementFocusedBeforeDialogWasOpened = this._document.activeElement as HTMLElement;

      // Note that there is no focus method when rendering on the server.
      if (this._elementRef.nativeElement.focus) {
        // Move focus onto the lightbox immediately in order to prevent the user from accidentally
        // opening multiple dialogs at the same time. Needs to be async, because the element
        // may not be focusable immediately.
        Promise.resolve().then(() => this._elementRef.nativeElement.focus());
      }
    }
  }

  /** Restores focus to the element that was focused before the lightbox opened. */
  private _restoreFocus() {
    const toFocus = this._elementFocusedBeforeDialogWasOpened;

    // We need the extra check, because IE can set the `activeElement` to null in some cases.
    if (toFocus && typeof toFocus.focus === 'function') {
      toFocus.focus();
    }

    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
}
