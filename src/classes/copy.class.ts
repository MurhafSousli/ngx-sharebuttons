import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share-buttons.models';
import { ShareButtonDirective } from '../directives/share-button.directive';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export class CopyButton implements IShareButton {

  constructor(public prop: ShareButtonProp) {
  }

  link(url: string, args?: ShareButtonArgs) {

    return this.prop.type;
  }

  count() {

    return Observable.empty();
  }

  /** copy URL to clipboard */
  copyURLToClipboard(directive: ShareButtonDirective, url: string) {

    const temp = {text: directive.shareButton.prop.text, icon: directive.shareButton.prop.icon};
    Observable.of({}).take(1).do(() => {
        url = decodeURIComponent(url);
        const textArea = directive.renderer.createElement('textarea');

        // Place in top-left corner of screen regardless of scroll position.
        directive.renderer.setStyle(textArea, 'position', 'fixed');
        directive.renderer.setStyle(textArea, 'top', 0);
        directive.renderer.setStyle(textArea, 'left', 0);

        // Ensure it has a small width and height. Setting to 1px / 1em
        // doesn't work as directive gives a negative w/h on some browsers.
        directive.renderer.setStyle(textArea, 'width', '2em');
        directive.renderer.setStyle(textArea, 'height', '2em');

        // We don't need padding, reducing the size if it does flash render
        directive.renderer.setStyle(textArea, 'padding', 0);

        // Clean up any borders.
        directive.renderer.setStyle(textArea, 'border', 'none');
        directive.renderer.setStyle(textArea, 'outline', 'none');
        directive.renderer.setStyle(textArea, 'boxShadow', 'none');

        // Avoid flash of white box if rendered for any reason.
        directive.renderer.setStyle(textArea, 'background', 'transparent');
        directive.renderer.setProperty(textArea, 'value', url);
        directive.renderer.appendChild(directive.el, textArea);

        textArea.select();

        directive.doc.execCommand('copy');
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
      })
      .delay(2000)
      .do(() => {
        directive.shareButton.prop.text = temp.text;
        directive.shareButton.prop.icon = temp.icon;
        directive.cd.markForCheck();
      })
      .subscribe();

  }

}
