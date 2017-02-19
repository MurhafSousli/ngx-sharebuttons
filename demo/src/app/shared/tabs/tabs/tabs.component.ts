import {Component, QueryList, ContentChildren, AfterContentInit, ChangeDetectionStrategy} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'tabs',
  template: `
   <ul>
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active"
       [innerHtml]="tab.title | sanitizeHtml">
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styleUrls: ['tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab:TabComponent) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
