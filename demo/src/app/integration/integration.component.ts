import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {

  materialUsage =

  `<button md-button [shareButton]="'facebook'">Facebook on Flat button</button>
<button md-raised-button [shareButton]="'linkedin'">LinkedIn on Raised button</button>
<button md-fab [shareButton]="'twitter'"><md-icon>share</md-icon></button>
<button md-mini-fab [shareButton]="'pinterest'"><md-icon>share</md-icon></button>`;

  constructor() { }

  ngOnInit() {
  }

}
