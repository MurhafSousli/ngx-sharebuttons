import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';
import { DocsService } from '../../docs/docs.service';

@Component({
  selector: 'buttons-c',
  templateUrl: './buttons-c.component.html',
  styleUrls: ['./buttons-c.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsCComponent implements OnInit {

  code = {
    name: '<share-buttons>',
    example: '<share-buttons show="11"></share-buttons>',
    npm: `$ npm i -S @ngx-share/{core,button,buttons}
$ npm i -S @fortawesome/{fontawesome-svg-core,angular-fontawesome,free-solid-svg-icons,free-brands-svg-icons}`,
    yarn: `$ yarn add @ngx-share/{core,button,buttons}
$ yarn add @fortawesome/{fontawesome-svg-core,angular-fontawesome,free-solid-svg-icons,free-brands-svg-icons}`,
    import: `import { ShareButtonsModule } from '@ngx-share/buttons';

@NgModule({
  imports: [
    HttpClientModule,       // for share counts
    HttpClientJsonpModule,  // for linkedin and tumblr share counts
    ShareButtonsModule.forRoot()
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
