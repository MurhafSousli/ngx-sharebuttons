import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    examples: `<share-button button="twitter" text="Tweet" showText="true"></share-button>
<share-button button="facebook" text="Share" showText="true"></share-button>
<share-button button="pinterest"></share-button>`,
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

  constructor(private docs: DocsService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Share Button Component');
    const apiDatabase = new ApiDatabase(this.docs.getComponentApi());
    this.dataSource = new ApiDataSource(apiDatabase);
  }

}
