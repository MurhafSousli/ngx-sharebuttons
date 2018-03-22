import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ShareButtons } from '../../share/core';
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
    import: `import { ShareModule } from '@ngx-share/core';

@NgModule({
  imports: [
    HttpClientModule,       // for share counts
    HttpClientJsonpModule,  // for tumblr share counts
    ShareModule.forRoot()
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
    example1: `<button mat-button shareButton="facebook"><i class="fa fa-facebook"></i></button>
<button mat-raised-button shareButton="twitter"><i class="fa fa-twitter"></i></button>
<button mat-icon-button shareButton="linkedin"><i class="fa fa-linkedin"></i></button>
<button mat-fab shareButton="pinterest"><i class="fa fa-pinterest-p"></i></button>`,
    example2: `<button mat-fab shareButton="facebook" [style.backgroundColor]="share.prop.facebook.color">
  <i [class]="share.prop.facebook.icon"></i>
</button>
<button mat-fab shareButton="twitter" [style.backgroundColor]="share.prop.twitter.color">
  <i [class]="share.prop.twitter.icon"></i>
</button>
<button mat-fab shareButton="linkedin" [style.backgroundColor]="share.prop.linkedin.color">
  <i [class]="share.prop.linkedin.icon"></i>
</button>
<button mat-fab shareButton="whatsapp" [style.backgroundColor]="share.prop.whatsapp.color">
  <i [class]="share.prop.whatsapp.icon"></i>
</button>
<button mat-fab shareButton="telegram" [style.backgroundColor]="share.prop.telegram.color">
  <i [class]="share.prop.telegram.icon"></i>
</button>
<button mat-fab shareButton="pinterest" [style.backgroundColor]="share.prop.pinterest.color">
  <i [class]="share.prop.pinterest.icon"></i>
</button>`,
    example3: `<button mat-icon-button shareButton="facebook" [style.color]="share.prop.facebook.color">
  <i [class]="share.prop.facebook.icon"></i>
</button>
<button mat-icon-button shareButton="twitter" [style.color]="share.prop.twitter.color">
  <i [class]="share.prop.twitter.icon"></i>
</button>
<button mat-icon-button shareButton="linkedin" [style.color]="share.prop.linkedin.color">
  <i [class]="share.prop.linkedin.icon"></i>
</button>
<button mat-icon-button shareButton="whatsapp" [style.color]="share.prop.whatsapp.color">
  <i [class]="share.prop.whatsapp.icon"></i>
</button>
<button mat-icon-button shareButton="telegram" [style.color]="share.prop.telegram.color">
  <i [class]="share.prop.telegram.icon"></i>
</button>
<button mat-icon-button shareButton="pinterest" [style.color]="share.prop.pinterest.color">
  <i [class]="share.prop.pinterest.icon"></i>
</button>`
  };


  displayedColumns = ['type', 'name', 'description'];
  dataSource: ApiDataSource | null;

  constructor(private docs: DocsService, private titleService: Title, public share: ShareButtons) {
  }

  ngOnInit() {
    this.titleService.setTitle('Share Button Directive');
    const apiDatabase = new ApiDatabase(this.docs.getDirectiveApi());
    this.dataSource = new ApiDataSource(apiDatabase);
  }

}

