import { of, OperatorFunction } from 'rxjs';
import { map, delay, switchMap, catchError } from 'rxjs/operators';
import { ShareButtonRef } from './share.models';
import { copyToClipboard, mergeDeep } from './utils';

/**
 * Meta tags operator - Serialize meta tags into the sharer URL
 */
export const metaTagsOperators: OperatorFunction<any, any>[] = [
  map((ref: ShareButtonRef) => {

    // Social network sharer URL */
    const SharerURL = ref.prop.share[ref.platform];
    if (SharerURL) {

      // object contains supported meta tags
      const metaTags = ref.prop.share.metaTags;

      // object contains meta tags values */
      const metaTagsValues = ref.metaTags;

      let link = '';
      // Set each meta tag with user value
      if (metaTags) {
        link = Object.entries(metaTags).map(([key, metaTag]) =>
          metaTagsValues[key] ? `${metaTag}=${encodeURIComponent(metaTagsValues[key])}` : ''
        ).join('&');
      }
      return SharerURL + link;
    }
    return;
  })
];

/**
 * Print button operator
 */
export const printOperators: OperatorFunction<any, any>[] = [
  map(() => window.print())
];

/**
 * Copy link to clipboard, used for copy button
 */
export const copyOperators: OperatorFunction<any, any>[] = [
  map((ref: ShareButtonRef) => {

    // Disable the button
    ref.renderer.setStyle(ref.el, 'pointer-events', 'none');

    ref.temp = {text: ref.prop.text, icon: ref.prop.icon};
    ref.metaTags.url = decodeURIComponent(ref.metaTags.url);
    return ref;
  }),
  switchMap((ref: ShareButtonRef) => copyToClipboard(ref.metaTags.url, ref.platform).pipe(
    map(() => {
      ref.prop.text = ref.prop.successText;
      ref.prop.icon = ref.prop.successIcon;
      return ref;
    }),
    catchError(() => {
      ref.prop.text = ref.prop.failText;
      ref.prop.icon = ref.prop.failIcon;
      return of(ref);
    })
  )),
  map((ref: ShareButtonRef) => {
    ref.cd.markForCheck();
    return ref;
  }),
  delay(2000),
  map((ref: ShareButtonRef) => {

    // Enable the button
    ref.renderer.setStyle(ref.el, 'pointer-events', 'auto');

    // Reset copy button text and icon */
    ref.prop.text = ref.temp.text;
    ref.prop.icon = ref.temp.icon;
    ref.cd.markForCheck();
  })
];

/**
 * Add the share URL to message body, used for WhatsApp and Email buttons
 */
export const urlInMessageOperators: OperatorFunction<any, any>[] = [
  map((ref: ShareButtonRef) => {
    const description = ref.metaTags.description;
    const url = ref.metaTags.url;
    const newRef: ShareButtonRef = {
      metaTags: {
        description: description ? `${description}\r\n${url}` : url
      }
    };
    return mergeDeep(ref, newRef);
  })
];

export const FacebookCountOperators: OperatorFunction<any, any>[] = [
  map((res: any) => +res.share.share_count)
];

export const PinterestCountOperators: OperatorFunction<any, any>[] = [
  map((text: string) => JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1'))),
  map((res: any) => +res.count)
];

export const TumblrCountOperators: OperatorFunction<any, any>[] = [
  map((res: any) => +res.response.note_count)
];

export const RedditCountOperators: OperatorFunction<any, any>[] = [
  map((res: any) => +res.data.children[0].data.score)
];
