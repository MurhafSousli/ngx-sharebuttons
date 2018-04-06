import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faPinterest, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
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
    examples: `<share-button button="facebook" text="Share" [showText]="true"></share-button>
<share-button button="twitter" text="Tweet" [showText]="true"></share-button>
<share-button button="pinterest" [icon]="pinIcon"></share-button>`,
    customIcons: `<share-button button="facebook" theme="circles-dark" [icon]="fbIcon"></share-button>
<share-button button="twitter" theme="circles-dark" [icon]="tweetIcon"></share-button>
<share-button button="pinterest" theme="circles-dark" [icon]="pinIcon"></share-button>`,
    importIcons: `import { faFacebookSquare, faTwitterSquare, faPinterest } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'my-component',
})
export class MyComponent {
  fbIcon = faFacebookSquare;
  tweetIcon = faTwitterSquare;
  pinIcon = faPinterest;
}`,
    import: `import { ShareButtonModule } from '@ngx-share/button';

@NgModule({
  imports: [
    HttpClientModule,       // for share counts
    HttpClientJsonpModule,  // for linkedin and tumblr share counts
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
