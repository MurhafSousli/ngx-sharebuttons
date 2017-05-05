import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntegrationComponent {

  directiveLayout = `<div class="material-sharebuttons">
  <button md-button shareButton="facebook"><i class="fa fa-facebook"></i></button>
  <button md-raised-button shareButton="twitter"><i class="fa fa-twitter"></i></button>
  <button md-icon-button shareButton="linkedin"><i class="fa fa-linkedin"></i></button>
  <button md-fab shareButton="pinterest"><i class="fa fa-pinterest-p"></i></button>
</div>
`;

  imageSrc = 'https://raw.githubusercontent.com/MurhafSousli/ngx-sharebuttons/master/demo/src/assets/img/pinExample.jpg';

  pinHtml = `<div class="photo">
  <div class="pin-button" shareButton="pinterest" [sbImage]="imageSrc">
    <i class="fa fa-pinterest-p"></i>
  </div>
  <img [src]="imageSrc">
</div>`;

  pinCss = `.photo {
  position: relative;
  width: 600px;
  max-width: 100%;
  .pin-button {
    position: absolute;
    right: 1em;
    top: 1em;
    width: 40px;
    height: 40px;
    line-height: 42px;
    font-size: 20px;
    text-align: center;
    background-color: #ffffff;
    color: #862328;
    box-shadow: 0 2px 14px rgba(#862328, 0.7);
    border-radius: 50%;
    transition: all linear 200ms;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
  }
  img {
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
  }
  &:hover {
    .pin-button {
      visibility: visible;
      opacity: 1;
    }
  }
}`;
}
