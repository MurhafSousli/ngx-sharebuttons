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

  code = {
    options: `import { ShareButtonsModule } from '@ngx-share/buttons';
import { ShareButtonsOptions } from '@ngx-share/core';

const options: ShareButtonsOptions = {
  include: ['facebook', 'twitter', 'google'],
  theme: 'modern-light',
  gaTracking: true,
  twitterAccount: 'username'
}

@NgModule({
  imports: [
    ShareButtonsModule.forRoot({ options: options })
  ]
})`,
    metaButtons: `import { ShareButtonsModule } from '@ngx-share/buttons';
import { IShareButtons } from '@ngx-share/core';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const customProp: IShareButtons = {
  facebook: {
    icon: faFacebookSquare
  },
  twitter: {
    icon: faTwitterSquare,
    text: 'Tweet'
  },
  // and so on...
};

@NgModule({
  imports: [
    HttpClientModule,
    ShareButtonsModule.forRoot({ prop: customProp })
  ]
})`
  };


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
