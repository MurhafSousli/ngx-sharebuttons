import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemesComponent } from './themes.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [ThemesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ThemesComponent}
    ])
  ]

})
export class ThemesPageModule {
}
