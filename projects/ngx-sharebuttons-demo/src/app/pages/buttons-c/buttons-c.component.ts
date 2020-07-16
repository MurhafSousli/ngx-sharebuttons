import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';
import { DocsService } from '../../docs/docs.service';

@Component({
  host: {
    class: 'page'
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
    styles: `@import '~ngx-sharebuttons/themes/default/default-theme';`,
    npm: `npm i @ngx-sharebuttons @angular/cdk
npm i @fortawesome/fontawesome-svg-core @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons`,
    import: `import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

@NgModule({
  imports: [
    ShareButtonsModule,
    ShareIconsModule // Optional if you want the default share icons
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
