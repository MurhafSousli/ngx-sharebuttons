import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';
import { DocsService } from '../../docs/docs.service';

@Component({
  selector: 'button-c',
  templateUrl: './button-c.component.html',
  styleUrls: ['./button-c.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonCComponent implements OnInit {

  code = {
    name: '<share-button>',
    npm: `npm i -S @ngx-share/core @ngx-share/button @angular/cdk
npm i -S @fortawesome/fontawesome-svg-core @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons`,
    yarn: `yarn add @ngx-share/core @ngx-share/button @angular/cdk
yarn add @fortawesome/fontawesome-svg-core @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons`,
    styles: `@import '~@ngx-share/button/themes/default/default-theme';`,
    examples: `<share-button button="facebook" text="Share" [showText]="true"></share-button>
<share-button button="twitter" text="Tweet" [showText]="true"></share-button>
<share-button button="pinterest" text="pin"></share-button>`,
    customIcons: `<share-button button="facebook" theme="circles-dark" [icon]="['fab', 'facebook-square']"></share-button>
<share-button button="twitter" theme="circles-dark" [icon]="['fab', 'twitter-square']"></share-button>
<share-button button="pinterest" theme="circles-dark" [icon]="['fab', 'pinterest-p']"></share-button>`,
    imoprtIcons: `import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';

export class ButtonCComponent {
  fbIcon = faFacebookSquare;
  pinIcon = faPinterest;
  tweetIcon = faTwitterSquare;
}
`,
    import: `import { ShareButtonModule } from '@ngx-share/button';

@NgModule({
  imports: [
    HttpClientModule,       // (Required) For share counts
    HttpClientJsonpModule,  // (Optional) Add if you want tumblr share counts
    ShareButtonModule.forRoot()
  ]
})`
  };

  displayedColumns = ['type', 'name', 'description'];
  dataSource: ApiDataSource | null;

  fbIcon = faFacebookSquare;
  pinIcon = faPinterest;
  tweetIcon = faTwitterSquare;

  constructor(private docs: DocsService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Share Button Component');
    const apiDatabase = new ApiDatabase(this.docs.getComponentApi());
    this.dataSource = new ApiDataSource(apiDatabase);
  }

}
