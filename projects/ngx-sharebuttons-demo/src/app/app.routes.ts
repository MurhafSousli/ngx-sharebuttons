import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    pathMatch: 'full'
  },
  {
    path: 'share-button-component',
    loadComponent: () => import('./pages/button-c/button-c.component').then(m => m.ButtonCComponent)
  },
  {
    path: 'share-buttons-component',
    loadComponent: () => import('./pages/buttons-c/buttons-c.component').then(m => m.ButtonsCComponent)
  },
  {
    path: 'share-button-directive',
    loadComponent: () => import('./pages/button-d/button-d.component').then(m => m.ButtonDComponent)
  },
  {
    path: 'custom-button',
    loadComponent: () => import('./pages/custom-button/custom-button.component').then(m => m.CustomButtonComponent)
  },
  {
    path: 'icons',
    loadComponent: () => import('./pages/icons/icons.component').then(m => m.IconsComponent)
  },
  {
    path: 'global-options',
    loadComponent: () => import('./pages/global-options/global-options.component').then(m => m.GlobalOptionsComponent)
  },
  {
    path: 'styling-guide',
    loadComponent: () => import('./pages/styling/styling.component').then(m => m.StylingComponent)
  },
  {
    path: 'themes',
    loadComponent: () => import('./pages/themes/themes.component').then(m => m.ThemesComponent)
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
