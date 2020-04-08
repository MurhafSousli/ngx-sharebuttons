import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';
import { DocsService } from '../../docs/docs.service';

@Component({
  host: {
    'class': 'page'
  },
  selector: 'global-options',
  templateUrl: './global-options.component.html',
  styleUrls: ['./global-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalOptionsComponent implements OnInit {

  code = `import { ShareButtonsConfig, IShareButtons } from 'ngx-sharebuttons';

const customConfig: ShareButtonsConfig = {
  include: ['facebook', 'twitter', 'google'],
  exclude: [],
  theme: 'modern-light',
  gaTracking: true,
  autoSetMeta: true,
  twitterAccount: 'username',
  prop: {
    facebook: {
      icon: ['fab', 'facebook-square']
    },
    twitter: {
      icon: ['fab', 'twitter-square'],
      text: 'Tweet'
    },
    // and so on...
  }
}`;

  global = `import { SHARE_BUTTONS_CONFIG } from 'ngx-sharebuttons';

@NgModule({
  providers: [
    {
      provide: SHARE_BUTTONS_CONFIG,
      value: customConfig
    }
  ]
})
export class AppModule { }`;

  lazyLoad = `@NgModule({
  imports: [
    ShareButtonsModule.withConfig(customConfig)
  ]
})
export class FeatureModule { }`;


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
