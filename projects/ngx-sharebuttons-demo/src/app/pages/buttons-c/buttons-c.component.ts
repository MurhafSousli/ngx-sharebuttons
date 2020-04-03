import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';
import { DocsService } from '../../docs/docs.service';

@Component({
  host: {
    'class': 'page'
  },
  selector: 'buttons-c',
  templateUrl: './buttons-c.component.html',
  styleUrls: ['./buttons-c.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsCComponent implements OnInit {

  code = {
    name: '<share-buttons>',
    example: '<share-buttons show="11"></share-buttons>',
    styles: `@import '~@ngx-share/button/themes/default/default-theme';`,
    npm: `npm i -S @ngx-share/core @ngx-share/button @ngx-share/buttons @angular/cdk
npm i -S @fortawesome/fontawesome-svg-core @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons`,
    yarn: `yarn add @ngx-share/core @ngx-share/button @ngx-share/buttons @angular/cdk
yarn add @fortawesome/fontawesome-svg-core @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons`,
    import: `import { ShareButtonsModule } from '@ngx-share/buttons';

@NgModule({
  imports: [
    HttpClientModule,       // (Required) For share counts
    HttpClientJsonpModule,  // (Optional) Add if you want tumblr share counts
    ShareButtonsModule
  ]
})`
  };


  displayedColumns = ['type', 'name', 'description'];
  dataSource: ApiDataSource | null;

  constructor(private docs: DocsService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Share Buttons Component');
    const apiDatabase = new ApiDatabase(this.docs.getContainerApi());
    this.dataSource = new ApiDataSource(apiDatabase);
  }
}
