import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';
import { DocsService } from '../../docs/docs.service';
import { SharedModule } from '../../shared';

@Component({
  standalone: true,
  host: { class: 'page' },
  selector: 'buttons-c',
  templateUrl: './buttons-c.component.html',
  styleUrls: ['./buttons-c.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule]
})
export class ButtonsCComponent implements OnInit {

  private docs: DocsService = inject(DocsService);

  private titleService: Title = inject(Title);

  readonly displayedColumns: string[] = ['type', 'name', 'description'];

  dataSource: ApiDataSource | null;

  ngOnInit(): void {
    this.titleService.setTitle('Share Buttons Component');
    const apiDatabase: ApiDatabase = new ApiDatabase(this.docs.getContainerApi());
    this.dataSource = new ApiDataSource(apiDatabase);
  }
}
