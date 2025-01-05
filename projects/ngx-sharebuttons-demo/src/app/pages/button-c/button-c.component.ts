import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faFacebookSquare, faSquareXTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ApiDatabase, ApiDataSource } from '../../docs/docs.class';
import { DocsService } from '../../docs/docs.service';
import { SharedModule } from '../../shared';

@Component({
  host: { class: 'page' },
  selector: 'button-c',
  templateUrl: './button-c.component.html',
  styleUrl: './button-c.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule]
})
export class ButtonCComponent implements OnInit {

  private docs: DocsService = inject(DocsService);
  private titleService: Title = inject(Title);

  readonly fbIcon: IconDefinition = faFacebookSquare;
  readonly pinIcon: IconDefinition = faPinterest;
  readonly tweetIcon: IconDefinition = faSquareXTwitter;

  readonly displayedColumns: string[] = ['type', 'name', 'description'];

  dataSource: ApiDataSource | null;

  ngOnInit(): void {
    this.titleService.setTitle('Share Button Component');
    const apiDatabase: ApiDatabase = new ApiDatabase(this.docs.getComponentApi());
    this.dataSource = new ApiDataSource(apiDatabase);
  }

}
