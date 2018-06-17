import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', loadChildren: './pages/home/home.module#HomePageModule', pathMatch: 'full'},
  {path: 'share-button-component', loadChildren: './pages/button-c/button-c.module#ShareButtonPageModule'},
  {path: 'share-buttons-component', loadChildren: './pages/buttons-c/buttons-c.module#ShareButtonsPageModule'},
  {path: 'share-button-directive', loadChildren: './pages/button-d/button-d.module#ShareDirectivePageModule'},
  {path: 'icons', loadChildren: './pages/icons/icons.module#IconsPageModule'},
  {path: 'global-options', loadChildren: './pages/global-options/global-options.module#GlobalOptionsPageModule'},
  {path: 'styling-guide', loadChildren: './pages/styling/styling.module#StylingPageModule'},
  {path: 'themes', loadChildren: './pages/themes/themes.module#ThemesPageModule'},
  {path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule'},
  {path: '**',  loadChildren: './pages/not-found/not-found.module#NotFoundPageModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
