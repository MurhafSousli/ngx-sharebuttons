import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageComponent {

  totalShare: number = 0;

  sumCounts(count){
    this.totalShare += count;
  }

  importCode = `import {ShareButtonsModule} from 'ngx-sharebuttons';

@NgModule({
 imports: [
   ShareButtonsModule.forRoot()
 ]
})`;

  basicCode = '<share-buttons></share-buttons>';

  countTemplate = `<div class="share-container">
   <div class="share-count">
      <h3>{{totalShare | nFormatter}}</h3>
      <b>SHARES</b>
   </div>
   <share-buttons class="withCount" [url]="'https://twitter.com'" 
      [whatsApp]="false" [twitter]="false" [stumbleUpOn]="false"
      [showCount]="true" (count)="sumCounts($event)"></share-buttons>
</div>`;

  countCode = `export class SomeComponent {
  totalShare: number = 0;
  sumCounts(count){
    this.totalShare += count;
  }
}`;

  countStyle= `.share-container {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  .share-count {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 1rem;
    margin-right: 1rem;
    border-right: 2px solid $output-color;
    h3 {
      display: flex;
      flex-direction: column-reverse;
      font-size: 2.5rem;
      margin: 0;
    }
    b {
      font-size: .7rem;
    }
  }
 }`;

}
