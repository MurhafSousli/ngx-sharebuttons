import {Component, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomComponent {

  fbTemp = "<img src='assets/img/facebook.svg'>";
  twttTemp = "<img src='assets/img/twitter.svg'>";
  pintTemp = "<img src='assets/img/pinterest.svg'>";
  inTemp = "<img src='assets/img/linkedin.svg'>";
  googleTemp = "<img src='assets/img/google-plus.svg'>";
  tumblrTemp = "<img src='assets/img/tumblr.svg'>";
  whatsTemp = "<img src='assets/img/whatsapp.svg'>";

  cssCode = `// Add your css in the global style, not in the component stylesheet
.custom-buttons {
  display: flex;
  margin: 1em 0;

  .sb-buttons {
    flex: 1;
    display: flex;
    flex-wrap: wrap;

    button {
      min-width: 60px;
      background-color: transparent;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        transition: all ease .35s;
        &:hover {
          transform: scale(0.9);
        }
      }
    }
    .facebook{
      order: 6;
    }
    .twitter{
      order: 1;
    }
    .whatsapp{
      order: 2;
    }
  }
}`;

  htmlCode = `<share-buttons class="custom-buttons"
       [defaultStyle]="false"
       [facebook]="fbTemp"
       [twitter]="twttTemp"
       [pinterest]="pintTemp"
       [linkedIn]="inTemp"
       [google]="googleTemp"
       [tumblr]="tumblrTemp"
       [whatsApp]="whatsTemp"
       [reddit]="false"
       [stumbleUpOn]="false"
></share-buttons>`;

  tsCode = `export class SomeComponent {
  fbTemp = "${this.fbTemp}";
  twttTemp = "${this.twttTemp}";
  pintTemp = "${this.pintTemp}";
  inTemp = "${this.inTemp}";
  googleTemp = "${this.googleTemp}";
  tumblrTemp = "${this.tumblrTemp}";
  whatsTemp = "${this.whatsTemp}";
}`;
}
