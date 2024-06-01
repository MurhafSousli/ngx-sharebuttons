import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';
import { DocsService } from '../../docs/docs.service';
import { SharedModule } from '../../shared';

@Component({
  standalone: true,
  host: { class: 'page' },
  selector: 'global-options',
  templateUrl: './global-options.component.html',
  styleUrls: ['./global-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule]
})
export class GlobalOptionsComponent implements OnInit {

  private titleService: Title = inject(Title);

  private docs: DocsService = inject(DocsService);

  readonly displayedColumns: string[] = ['name', 'description'];
  dataSource: ApiDataSource;

  ngOnInit(): void {
    this.titleService.setTitle('Global options');
    const apiDatabase: ApiDatabase = new ApiDatabase(this.docs.getOptionsApi());
    this.dataSource = new ApiDataSource(apiDatabase);
  }

}
