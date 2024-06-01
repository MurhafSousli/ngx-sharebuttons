import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DocsService } from '../../docs/docs.service';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';
import { SharedModule } from '../../shared';

@Component({
  standalone: true,
  host: { class: 'page' },
  selector: 'button-d',
  templateUrl: './button-d.component.html',
  styleUrls: ['./button-d.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule]
})
export class ButtonDComponent implements OnInit {

  private docs: DocsService = inject(DocsService);

  private titleService: Title = inject(Title);

  displayedColumns: string[] = ['type', 'name', 'description'];
  dataSource: ApiDataSource | null;

  ngOnInit() {
    this.titleService.setTitle('Share Button Directive');
    const apiDatabase = new ApiDatabase(this.docs.getDirectiveApi());
    this.dataSource = new ApiDataSource(apiDatabase);
  }

}

