import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { delay } from 'rxjs/operators/delay';
import { ShareButtonRef } from './share.models';
import { copyToClipboard, mergeDeep } from './utils';

/**
 * None operator - just return the sharer URL
 */
export const noneOperator = map((ref: ShareButtonRef) => ref.prop.share[ref.os] + ref.url);

/**
 * Meta tags operator - Serialize meta tags in the sharer URL
 */
export const metaTagsOperator = map((ref: ShareButtonRef) => {

  // object contains supported meta tags
  const metaTags = ref.prop.share.metaTags;

  // object contains meta tags values */
  const metaTagsValues = ref.metaTags;

  // Social network sharer URL */
  const SharerURL = ref.prop.share[ref.os];

  // User share link
  let link = ref.url;

  // Set each meta tag with user value
  if (metaTags) {
    Object.keys(metaTags).map((key) => {
      if (metaTagsValues[key]) {
        link += `&${metaTags[key]}=${encodeURIComponent(metaTagsValues[key])}`;
      }
    });
  }
  return SharerURL + link;
});

/**
 * Print button operator
 */
export const printOperator = map((ref: ShareButtonRef) => ref.window.print());

/**
 * Pinterest operator - Since Pinterest requires the description and image meta tags,
 * this function checks if the meta tags are presented, if not it falls back to page meta tags
 * This should placed after the metaTagsOperator
 */
export const pinterestOperator = map((url: string) => {
  if (!url.includes('&description')) {
    /** If user didn't add description, get it from the OG meta tag */
    const ogDescription: Element = document.querySelector(`meta[property="og:description"]`);
    if (ogDescription) {
      url += '&description=' + ogDescription.getAttribute('content');
    } else {
      console.warn(`[ShareButtons]: You didn't set the description text for Pinterest button`);
    }
  }
  if (!url.includes('&media')) {
    const ogImage: Element = document.querySelector(`meta[property="og:image"]`);
    if (ogImage) {
      url += '&media=' + ogImage.getAttribute('content');
    } else {
      console.warn(`[ShareButtons]: You didn't set the image URL for Pinterest button`);
    }
  }
  return url;
});

/**
 * Copy button operator - to copy link to clipboard
 */
export const copyOperators = [
  map((ref: ShareButtonRef) => {

    // Disable the button
    ref.renderer.setStyle(ref.el, 'pointer-events', 'none');

    ref.temp = {text: ref.prop.text, icon: ref.prop.icon};
    const link = decodeURIComponent(ref.url);

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

export const emailOperator = map((ref: ShareButtonRef) => {
  const description = ref.metaTags.description;
  const url = decodeURIComponent(ref.url);
  const newRef: ShareButtonRef = {
    metaTags: {
      description: description ? `${description}\r\n\r\n${url}` : url
    }
  };
  return mergeDeep(ref, newRef);
});
