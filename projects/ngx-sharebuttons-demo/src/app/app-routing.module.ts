import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: 'share-button-component',
    loadChildren: () => import('./pages/button-c/button-c.module').then(m => m.ShareButtonPageModule)
  },
  {
    path: 'share-buttons-component',
    loadChildren: () => import('./pages/buttons-c/buttons-c.module').then(m => m.ShareButtonsPageModule)
  },
  {
    path: 'share-button-directive',
    loadChildren: () => import('./pages/button-d/button-d.module').then(m => m.ShareDirectivePageModule)
  },
  {
    path: 'icons',
    loadChildren: () => import('./pages/icons/icons.module').then(m => m.IconsPageModule)
  },
  {
    path: 'global-options',
    loadChildren: () => import('./pages/global-options/global-options.module').then(m => m.GlobalOptionsPageModule)
  },
  {
    path: 'styling-guide',
    loadChildren: () => import('./pages/styling/styling.module').then(m => m.StylingPageModule)
  },
  {
    path: 'themes',
    loadChildren: () => import('./pages/themes/themes.module').then(m => m.ThemesPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundPageModule)
  }
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
