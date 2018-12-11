import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';
import { DocsService } from '../../docs/docs.service';

@Component({
  selector: 'global-options',
  templateUrl: './global-options.component.html',
  styleUrls: ['./global-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalOptionsComponent implements OnInit {

  code = `import { ShareButtonsModule } from '@ngx-share/buttons';
import { ShareButtonsOptions, IShareButtons } from '@ngx-share/core';

const customOptions: ShareButtons = {
  include: ['facebook', 'twitter', 'google'],
  exclude: [],
  theme: 'modern-light',
  gaTracking: true,
  autoSetMeta: true,
  twitterAccount: 'username'
}

const customProps: IShareButtons = {
  facebook: {
    icon: ['fab', 'facebook-square']
  },
  twitter: {
    icon: ['fab', 'twitter-square'],
    text: 'Tweet'
  },
  // and so on...
};

@NgModule({
  imports: [
    ShareButtonsModule.forRoot({ options: customOptions, prop: customProps })
  ]
})`;


  displayedColumns = ['name', 'description'];
  dataSource: ApiDataSource | null;

  constructor(private docs: DocsService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Global options');
    const apiDatabase = new ApiDatabase(this.docs.getOptionsApi());
    this.dataSource = new ApiDataSource(apiDatabase);
  }

}
