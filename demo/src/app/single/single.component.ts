import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ShareButton, ShareProvider} from 'ng2-sharebuttons';

@Component({
  selector: 'single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleComponent implements OnInit {

  fbButton;
  cmpName = '<share-button></share-button>';
  tsCode = `import { ShareButton, ShareProvider } from 'ngx-sharebuttons';

export class SomeComponent {
  fbButton;
  ngOnInit() {
    // ShareButton(button name [provider], template, classes)
    this.fbButton = new ShareButton(
      ShareProvider.facebook,
      '<i class="fa fa-facebook"></i>',
      'facebook'
    );
  }
}`;
  htmlCode = '<share-button class="facebook" [button]="fbButton"></share-button>';
  cssCode = `// Add your css in the global style, not in the component stylesheet
share-button button {
  font-size: 18px;
  width: 80px;
  background-color: transparent;
  padding: 0.4em 1em;
  margin: 1em;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  transition: all linear 200ms;
  &:active {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  }
}
.facebook button {
  color: #35528E;
}
  `;

  constructor() {
  }

  ngOnInit() {
    this.fbButton = new ShareButton(
      ShareProvider.FACEBOOK,
      '<i class="fa fa-facebook"></i>',
      'facebook'
    );
  }

}
