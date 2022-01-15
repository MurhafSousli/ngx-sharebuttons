import { ComponentRef, Injectable, Injector } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ShareButtonsPopup } from './share-buttons-popup';
import { SHARE_POPUP_OPTIONS, SharePopupOptions } from './share-buttons-popup.model';

@Injectable()
export class SharePopupService {

  private _overlayRef: OverlayRef;

  constructor(private _overlay: Overlay, private _injector: Injector) {
  }

  open(config?: SharePopupOptions) {
    if (!this._overlayRef || !this._overlayRef.hasAttached()) {
      this._overlayRef = this._overlay.create({
        backdropClass: 'sb-backdrop',
        hasBackdrop: true,
        panelClass: '',
        positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
        scrollStrategy: this._overlay.scrollStrategies.block(),
        disposeOnNavigation: true
      });
      const popupComponentPortal = new ComponentPortal(ShareButtonsPopup, null, this.createInjector(config));
      const sharePopupRef: ComponentRef<ShareButtonsPopup> = this._overlayRef.attach(popupComponentPortal);
      sharePopupRef.instance.overlayRef = this._overlayRef;

      if (config.hasBackdrop) {
        this._overlayRef.backdropClick().subscribe(() => this.close());
      }
    }
  }

  /**
   * Close Share Popup Overlay
   */
  close() {
    if (this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
  }

  private createInjector(dataToPass: SharePopupOptions): Injector {
    return Injector.create({
      parent: this._injector,
      providers: [
        { provide: SHARE_POPUP_OPTIONS, useValue: dataToPass }
      ]
    });
  }

}
