import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighlightModule } from 'ngx-highlightjs';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { ShareButtonsPopupModule } from 'ngx-sharebuttons/popup';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material.module';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LabComponent } from './lab/lab.component';
import { BadgesComponent } from './badges/badges.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { CodeSwitcherComponent } from './code-switcher/code-switcher.component';
import { CodeDialogComponent } from './code-dialog/code-dialog.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { HlCodeComponent } from './hl-code/hl-code.component';
import { NoteComponent } from './note/note.component';
import { SharedInfoComponent } from './shared-info/shared-info.component';
import { OverviewContentComponent } from './overview-content/overview-content.component';
import { KebabCasePipe } from './kebab-case.pipe';
import { DocContainerComponent } from './doc-container/doc-container.component';

@NgModule({
  declarations: [
    NavMenuComponent,
    BadgesComponent,
    RibbonComponent,
    LabComponent,
    CodeSwitcherComponent,
    CodeDialogComponent,
    ThemeSwitcherComponent,
    FooterComponent,
    HeaderComponent,
    SectionTitleComponent,
    HlCodeComponent,
    NoteComponent,
    SharedInfoComponent,
    OverviewContentComponent,
    KebabCasePipe,
    DocContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgScrollbarModule,
    HighlightModule,
    ShareButtonsPopupModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HighlightModule,
    ShareButtonsPopupModule,
    MaterialModule,
    FlexLayoutModule,
    NgScrollbarModule,
    FontAwesomeModule,
    NavMenuComponent,
    BadgesComponent,
    LabComponent,
    CodeSwitcherComponent,
    ThemeSwitcherComponent,
    FooterComponent,
    HeaderComponent,
    SectionTitleComponent,
    HlCodeComponent,
    NoteComponent,
    SharedInfoComponent,
    OverviewContentComponent,
    KebabCasePipe,
    DocContainerComponent
  ]
})
export class SharedModule {
}
