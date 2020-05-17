import { ComponentRef, Injectable, Injector } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ShareButtonsPopup } from './share-buttons-popup';
import { SHARE_POPUP_OPTIONS, SharePopupOptions } from './share-buttons-popup.model';

@Injectable()
export class SharePopupService {

  private _overlayRef: OverlayRef;

  constructor(private _overlay: Overlay, private _injector: Injector, private overlayPositionBuilder: OverlayPositionBuilder) {
  }

  open(config?: SharePopupOptions, el?: HTMLElement) {
    if (!this._overlayRef || !this._overlayRef.hasAttached()) {
      const pStrategy = this.overlayPositionBuilder
      // Create position attached to the elementRef
      .flexibleConnectedTo(el)
      .withPositions([{
        originX: 'end',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
        offsetY: 10,
        offsetX: 10
      }]);
      console.log('open', config);
      this._overlayRef = this._overlay.create({
        backdropClass: 'sb-backdrop',
        hasBackdrop: true,
        panelClass: '',
        positionStrategy: pStrategy, // this._overlay.position().global().centerHorizontally().centerVertically(),
        scrollStrategy: this._overlay.scrollStrategies.block(),
        disposeOnNavigation: true
      });
      const popupComponentPortal = new ComponentPortal(ShareButtonsPopup, null, this.createInjector(config));
      const sharePopupRef: ComponentRef<ShareButtonsPopup> = this._overlayRef.attach(popupComponentPortal);
      sharePopupRef.instance.overlayRef = this._overlayRef;

      if (config.hasBackdrop) {
        this._overlayRef.backdropClick().subscribe(() => {
          console.log('test');
          this.close();
        });
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

  private createInjector(dataToPass: SharePopupOptions): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(SHARE_POPUP_OPTIONS, dataToPass);
    return new PortalInjector(this._injector, injectorTokens);
  }

}
