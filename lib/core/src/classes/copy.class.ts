import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share.models';
import { ShareButtonDirective } from '../directives/share-button.directive';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';
import { tap, take, delay } from 'rxjs/operators';

export class CopyButton implements IShareButton {

  constructor(public prop: ShareButtonProp) {
  }

  link(url: string, args?: ShareButtonArgs) {
    this.copyURLToClipboard(url, args.directive);
    return null;
  }

  count(): any {

    return empty();
  }

  /** copy URL to clipboard */
  copyURLToClipboard(url: string, directive: ShareButtonDirective) {

    const temp = {text: directive.shareButton.prop.text, icon: directive.shareButton.prop.icon};
    of({}).pipe(
      take(1),
      tap(() => {
          url = decodeURIComponent(url);
          const textArea = directive.renderer.createElement('textarea');

          // Place in top-left corner of screen regardless of scroll position.
          textArea.style.position = 'fixed';
          textArea.style.top = 0;
          textArea.style.left = 0;

          // Ensure it has a small width and height. Setting to 1px / 1em
          // doesn't work as directive gives a negative w/h on some browsers.
          textArea.style.width = '2em';
          textArea.style.height = '2em';

          // We don't need padding, reducing the size if it does flash render
          textArea.style.padding = 0;

          // Clean up any borders.
          textArea.style.border = 'none';
          textArea.style.outline = 'none';
          textArea.style.boxShadow = 'none';

          // Avoid flash of white box if rendered for any reason.
          textArea.style.background = 'transparent';
          textArea.value = url;
          directive.renderer.appendChild(directive.el, textArea);

          textArea.select();

          document.execCommand('copy');

          directive.renderer.removeChild(directive.el, textArea);

          directive.shareButton.prop.text = this.prop.successText;
          directive.shareButton.prop.icon = this.prop.successIcon;
          directive.cd.markForCheck();
        },
        () => {
          directive.shareButton.prop.text = this.prop.failText;
          directive.shareButton.prop.icon = this.prop.failIcon;
          directive.cd.markForCheck();
          console.warn('[ShareButtons]: Print button could not copy URL to clipboard');
        }
      ),
      delay(2000),
      tap(() => {
        directive.shareButton.prop.text = temp.text;
        directive.shareButton.prop.icon = temp.icon;
        directive.cd.markForCheck();
      })
    ).subscribe();

  }

}
