import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DocsService } from '../../docs/docs.service';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';

@Component({
  host: {
    class: 'page'
  },
  selector: 'button-d',
  templateUrl: './button-d.component.html',
  styleUrls: ['./button-d.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDComponent implements OnInit {

  code = {
    npm: `npm i ngx-sharebuttons @angular/cdk`,
    import: `import { ShareModule } from 'ngx-sharebuttons';

@NgModule({
  imports: [
    ShareModule
  ]
})`,
    example1: `<button mat-fab shareButton="facebook"
                #fbBtn="shareButton"
                [style.backgroundColor]="fbBtn?.color">
  <fa-icon *ngIf="fbBtn" [icon]="fbBtn.icon" size="lg"></fa-icon>
</button>
<button mat-fab shareButton="twitter"
                #twtBtn="shareButton"
                [style.backgroundColor]="twtBtn?.color">
  <fa-icon *ngIf="twtBtn" [icon]="twtBtn.icon" size="lg"></fa-icon>
</button>`,
    example2: `<button mat-icon-button
        shareButton="facebook"
        #fbBtn="shareButton"
        [style.color]="fbBtn?.color">
  <fa-icon *ngIf="fbBtn" [icon]="fbBtn.icon" size="lg"></fa-icon>
</button>
<button mat-icon-button
        shareButton="twitter"
        #twtBtn="shareButton"
        [style.color]="twtBtn?.color">
  <fa-icon *ngIf="twtBtn" [icon]="twtBtn.icon" size="lg"></fa-icon>
</button>`
  };


  displayedColumns = ['type', 'name', 'description'];
  dataSource: ApiDataSource | null;

  constructor(private docs: DocsService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Share Button Directive');
    const apiDatabase = new ApiDatabase(this.docs.getDirectiveApi());
    this.dataSource = new ApiDataSource(apiDatabase);
  }

}

