import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { delay } from 'rxjs/operators/delay';
import { ShareButtonRef } from './share.models';
import { copyToClipboard, mergeDeep } from './utils';

/**
 * Meta tags operator - Serialize meta tags into the sharer URL
 */
export const metaTagsOperator = map((ref: ShareButtonRef) => {

  // Social network sharer URL */
  const SharerURL = ref.prop.share[ref.os];
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
});

/**
 * Print button operator
 */
export const printOperator = map((ref: ShareButtonRef) => ref.window.print());

/**
 * Copy link to clipboard, used for copy button
 */
export const copyOperators = [
  map((ref: ShareButtonRef) => {

    // Disable the button
    ref.renderer.setStyle(ref.el, 'pointer-events', 'none');

    ref.temp = {text: ref.prop.text, icon: ref.prop.icon};
    const link = decodeURIComponent(ref.metaTags.url);

    copyToClipboard(link, ref.os === 'ios')
      .then(() => {
        ref.prop.text = ref.prop.successText;
        ref.prop.icon = ref.prop.successIcon;
      })
      .catch(() => {
        ref.prop.text = ref.prop.failText;
        ref.prop.icon = ref.prop.failIcon;
      })
      .then(() => ref.cd.markForCheck());
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
export const urlInMessageOperator = map((ref: ShareButtonRef) => {
  const description = ref.metaTags.description;
  const url = ref.metaTags.url;
  const newRef: ShareButtonRef = {
    metaTags: {
      description: description ? `${description}\r\n${url}` : url
    }
  };
  return mergeDeep(ref, newRef);
});
