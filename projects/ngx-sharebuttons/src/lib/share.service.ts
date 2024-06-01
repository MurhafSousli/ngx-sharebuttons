import { inject, Injectable, WritableSignal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
import { Platform } from '@angular/cdk/platform';
import { Clipboard } from '@angular/cdk/clipboard';
import { SHARE_ICONS } from 'ngx-sharebuttons/icons';
import { getValidUrl } from './utils';
import { SHARE_BUTTONS } from './share.defaults';
import { IShareButton, ShareParams, ShareParamsFunc, SharerMethod, SharerMethods } from './share.models';

interface ShareLinkParams {
  url: string;
  params: Record<string, string>;
  target?: string;
}

interface WindowOptions {
  windowObj?: Window;
  openFunc?: string;
  width?: number;
  height?: number;
}

interface CreateShareButtonOptions {
  name: string;
  params: ShareParams;
  props?: IShareButton;
  method?: SharerMethod;
  target?: string;
  windowOptions?: WindowOptions;
  uiState?: WritableSignal<any>;
  debug?: boolean;
}

interface ShareOptions {
  params: ShareParams;
  props?: IShareButton;
  method?: SharerMethod;
  target?: string;
  windowOptions?: WindowOptions;
  uiState?: WritableSignal<any>;
  debug?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private readonly document: Document = inject(DOCUMENT);

  // This declaration just to allow SHARE_ICONS to load the icons
  private readonly icons = inject(SHARE_ICONS, { optional: true });

  private readonly meta: Meta = inject(Meta);

  private readonly platform: Platform = inject(Platform);

  private readonly clipboard: Clipboard = inject(Clipboard);

  /**
   * Get meta tag content
   */
  private getMetaTagContent(key: string): string {
    const metaUsingProperty: HTMLMetaElement = this.meta.getTag(`property="${ key }"`);
    const metaUsingName: HTMLMetaElement = this.meta.getTag(`name="${ key }"`);

    return (metaUsingProperty || metaUsingName)?.getAttribute('content') ?? null;
  }

  private getComputedUrl(url: string): string {
    return getValidUrl(url || this.getMetaTagContent('og:url') || this.document.location.href);
  }

  private getComputedParams(params: ShareParams): ShareParams {
    // If user provided a URL, then we cannot use the meta tag of the current page for the sharing parameters
    if (params.url) {
      return {
        title: params.title,
        description: params.description,
        image: params.image,
        tags: params.tags,
        via: params.via,
        url: this.getComputedUrl(params.url),
        appId: params.appId || this.getMetaTagContent('fb:app_id'),
        redirectUrl: params.redirectUrl || this.document.location.href
      }
    }
    return {
      title: params.title || this.getMetaTagContent('og:title'),
      description: params.description || this.getMetaTagContent('og:description'),
      image: params.image || this.getMetaTagContent('og:image'),
      tags: params.tags,
      via: params.via,
      url: this.getComputedUrl(params.url),
      appId: params.appId || this.getMetaTagContent('fb:app_id'),
      redirectUrl: params.redirectUrl || this.document.location.href
    }
  }

  private getComputedUrlParams(shareButton: IShareButton, params: ShareParams): Record<string, string> {
    const computedParams: ShareParams = this.getComputedParams(params);

    return Object.entries(shareButton.params).reduce((params: Record<string, string>, [key, realKey]: [string, string]) => {
      // Check if param has a value
      if (computedParams[key]) {
        // Check if param has a resolver function
        const resolver: ShareParamsFunc = shareButton.paramsFunc?.[key];
        params[realKey] = resolver ? resolver(computedParams) : computedParams[key];
      }
      return params;
    }, {});
  }

  private getShareButtonInstance(name: string, props: IShareButton): IShareButton {
    /** Combine injected option with default options */
    const button: IShareButton = props ? { ...SHARE_BUTTONS[name], ...props } : SHARE_BUTTONS[name];

    if (button) {
      return button;
    }
    throw new Error(`[ShareButtons]: The share button '${ button }' does not exist!`);
  }

  private share(shareButton: IShareButton, options: ShareOptions): void {
    let sharerLink: string;
    if (this.platform.IOS && shareButton.share.ios) {
      sharerLink = shareButton.share.ios;
    } else if (this.platform.ANDROID && shareButton.share.android) {
      sharerLink = shareButton.share.android;
    } else {
      sharerLink = shareButton.share.desktop;
    }

    const params: Record<string, string> = this.getComputedUrlParams(shareButton, options.params);

    if (sharerLink) {
      switch (options.method) {

        case SharerMethods.Anchor:
          this.openViaAnchor({
            params,
            url: sharerLink,
            target: options.target
          }, options.debug);
          break;

        case SharerMethods.Window:
          this.openViaWindow({
            params,
            url: sharerLink,
            target: options.target
          }, options.windowOptions, options.debug);
          break;
      }
    }
  }

  open(options: CreateShareButtonOptions): void {
    const button: IShareButton = this.getShareButtonInstance(options.name, options.props);
    this.openInstance(options, button);
  }

  openInstance(options: ShareOptions, button: IShareButton): void {
    if (button.share) {
      this.share(button, options);
    } else {
      button.func({
        params: this.getComputedParams(options.params),
        data: button.data,
        clipboard: this.clipboard,
        uiState: options.uiState
      });
    }
  }

  openViaWindow(args: ShareLinkParams, windowOptions?: WindowOptions, debug?: boolean): void {
    const finalUrl: string = `${ args.url }?${ new HttpParams({ fromObject: args.params }).toString() }`;

    if (debug) {
      console.log('[SHARE BUTTONS]: open link via window', finalUrl);
    }

    const windowRef: Window = windowOptions?.windowObj || this.document.defaultView;
    // Open link using Window object
    const openWindow = windowRef?.[windowOptions?.openFunc] || this.document.defaultView.open;

    openWindow(finalUrl, args.target ?? '_blank', `width=${ windowOptions?.width || 800 }, height=${ windowOptions?.height || 500 }`);

    // Prevent security vulnerability https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c
    windowRef.opener ??= null;
  }

  openViaAnchor(args: ShareLinkParams, debug?: boolean): void {
    const finalUrl: string = `${ args.url }?${ new HttpParams({ fromObject: args.params }).toString() }`;

    if (debug) {
      console.log('[SHARE BUTTONS]: open link via anchor', finalUrl);
    }

    const linkElement: HTMLAnchorElement = this.document.createElement('a');
    // Make it open in a new tab/window (depends on user's browser configuration)
    linkElement.setAttribute('target', args.target ?? '_blank');

    // Prevent security vulnerability https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c
    linkElement.setAttribute('rel', 'noopener noreferrer');
    linkElement.href = finalUrl;
    linkElement.click();
    linkElement.remove();
  }
}
