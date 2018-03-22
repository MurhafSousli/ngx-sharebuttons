import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ShareButtons, noneOperator } from './sharebuttons/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private share: ShareButtons) {
  }

  ngOnInit() {
    // this.share.addButton('messenger', {
    //   type: 'messenger',
    //   text: 'Messenger',
    //   icon: 'fab fa-facebook-messenger',
    //   share: {
    //     android: 'fb-messenger://share/?link=',
    //     ios: 'fb-messenger://share/?link=',
    //     operators: [noneOperator]
    //   }
    // });
  }
}
