import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';
import { DocsService } from '../../docs/docs.service';
import { Title } from '@angular/platform-browser';

@Component({
  host: {
    class: 'page'
  },
  selector: 'app-popup-buttons',
  templateUrl: './popup-buttons.component.html',
  styleUrls: ['./popup-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupButtonsComponent implements OnInit {


  code = {
    name: '<share-popup-button>, <button shareButtonsPopup>',
    example: '<share-popup-button>Share</share-popup-button>',
    styles: `@import '~@angular/cdk/overlay-prebuilt.css'; /** Add this only for non-material project */
@import '~ngx-sharebuttons/themes/default/default-theme';`,
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
