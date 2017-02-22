import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntegrationComponent {

  directiveLayout = `<div class="material-sharebuttons">
  <button md-button [shareButton]="'facebook'"><i class="fa fa-facebook"></i></button>
  <button md-raised-button [shareButton]="'twitter'"><i class="fa fa-twitter"></i></button>
  <button md-icon-button [shareButton]="'linkedin'"><i class="fa fa-linkedin"></i></button>
  <button md-fab [shareButton]="'pinterest'"><i class="fa fa-pinterest-p"></i></button>
 </div>
`;

}
