import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: '**',    component: Home }
];
