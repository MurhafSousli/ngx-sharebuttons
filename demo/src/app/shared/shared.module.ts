import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighlightModule } from 'ngx-highlightjs';
import { MaterialModule } from '../material.module';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { ShareButtonsModule } from '../share/buttons';
import { ScrollbarModule } from 'ngx-scrollbar';

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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    SectionTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncLocalStorageModule,
    ScrollbarModule,
    HighlightModule,
    ShareButtonsModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HighlightModule,
    ShareButtonsModule,
    MaterialModule,
    FlexLayoutModule,
    ScrollbarModule,
    NavMenuComponent,
    BadgesComponent,
    LabComponent,
    CodeSwitcherComponent,
    ThemeSwitcherComponent,
    FooterComponent,
    HeaderComponent,
    SectionTitleComponent,
    FontAwesomeModule
  ],
  entryComponents: [
    CodeDialogComponent
  ]
})
export class SharedModule {
}
