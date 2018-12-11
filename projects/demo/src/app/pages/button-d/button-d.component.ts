import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ShareService } from '@ngx-share/core';
import { DocsService } from '../../docs/docs.service';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';

@Component({
  selector: 'button-d',
  templateUrl: './button-d.component.html',
  styleUrls: ['./button-d.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDComponent implements OnInit {

  code = {
    npm: `npm i -S @ngx-share/core @angular/cdk`,
    yarn: `yarn add @ngx-share/core @angular/cdk`,
    import: `import { ShareModule } from '@ngx-share/core';

@NgModule({
  imports: [
    HttpClientModule,       // (Required) For share counts
    HttpClientJsonpModule,  // (Optional) Add if you want tumblr share counts
    ShareModule
  ]
})`,
  service: `import { ShareButtons } from '@ngx-share/core';

@Component({
  // ...
})
export class MyComponent {
  constructor(public share: ShareButtons) {
  }
}`,
    example1: `<button mat-fab shareButton="facebook" [style.backgroundColor]="share.prop.facebook.color">
  <fa-icon [icon]="share.prop.facebook.icon" size="lg"></fa-icon>
</button>
<button mat-fab shareButton="twitter" [style.backgroundColor]="share.prop.twitter.color">
  <fa-icon [icon]="share.prop.twitter.icon" size="lg"></fa-icon>
</button>
<button mat-fab shareButton="linkedin" [style.backgroundColor]="share.prop.linkedin.color">
  <fa-icon [icon]="share.prop.linkedin.icon" size="lg"></fa-icon>
</button>
<button mat-fab shareButton="whatsapp" [style.backgroundColor]="share.prop.whatsapp.color">
  <fa-icon [icon]="share.prop.whatsapp.icon" size="lg"></fa-icon>
</button>
<button mat-fab shareButton="telegram" [style.backgroundColor]="share.prop.telegram.color">
  <fa-icon [icon]="share.prop.telegram.icon" size="lg"></fa-icon>
</button>
<button mat-fab shareButton="pinterest" [style.backgroundColor]="share.prop.pinterest.color">
  <fa-icon [icon]="share.prop.pinterest.icon" size="lg"></fa-icon>
</button>`,
    example2: `<button mat-icon-button shareButton="facebook" #fbBtn [style.color]="share.prop.facebook.color">
  <fa-icon [icon]="share.prop.facebook.icon" size="lg"></fa-icon>
</button>
<button mat-icon-button shareButton="twitter" #twtBtn [style.color]="share.prop.twitter.color">
  <fa-icon [icon]="share.prop.twitter.icon" size="lg"></fa-icon>
</button>
<button mat-icon-button shareButton="linkedin" #inBtn [style.color]="share.prop.linkedin.color">
  <fa-icon [icon]="share.prop.linkedin.icon" size="lg"></fa-icon>
</button>
<button mat-icon-button shareButton="whatsapp" #wtsBtn [style.color]="share.prop.whatsapp.color">
  <fa-icon [icon]="share.prop.whatsapp.icon" size="lg"></fa-icon>
</button>
<button mat-icon-button shareButton="telegram" #teleBtn [style.color]="share.prop.telegram.color">
  <fa-icon [icon]="share.prop.telegram.icon" size="lg"></fa-icon>
</button>
<button mat-icon-button shareButton="pinterest" #pinBtn [style.color]="share.prop.pinterest.color">
  <fa-icon [icon]="share.prop.pinterest.icon" size="lg"></fa-icon>
</button>`
  };


  displayedColumns = ['type', 'name', 'description'];
  dataSource: ApiDataSource | null;

  constructor(private docs: DocsService, private titleService: Title, public share: ShareService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Share Button Directive');
    const apiDatabase = new ApiDatabase(this.docs.getDirectiveApi());
    this.dataSource = new ApiDataSource(apiDatabase);
  }

}

