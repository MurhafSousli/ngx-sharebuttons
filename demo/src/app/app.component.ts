import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ShareButtonsService} from "./share/services/share-buttons.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private shareService: ShareButtonsService){
    shareService.twitterAccount = 'MurhafSousli';
  }

}
