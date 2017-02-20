import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BadgesComponent} from './badges/badges.component';
import {OutputComponent} from './output/output.component';
import {RibbonComponent} from './ribbon/ribbon.component';
import {TabsComponent} from './tabs/tabs/tabs.component';
import {TabComponent} from './tabs/tab/tab.component';
import {SanitizerPipe} from './sanitizer/sanitizer.pipe';
import {HighlightComponent} from './highlight/component/highlight.component';
import {HighlightDirective} from './highlight/directive/highlight.directive';


@NgModule({
  declarations: [
    BadgesComponent,
    OutputComponent,
    RibbonComponent,
    HighlightComponent,
    TabsComponent,
    TabComponent,
    SanitizerPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BadgesComponent,
    OutputComponent,
    RibbonComponent,
    TabsComponent,
    TabComponent,
    HighlightComponent,
    HighlightDirective
  ]
})
export class SharedModule {
}
