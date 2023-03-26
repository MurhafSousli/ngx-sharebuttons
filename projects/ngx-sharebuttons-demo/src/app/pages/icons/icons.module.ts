import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { IconsComponent } from './icons.component';

@NgModule({
  declarations: [IconsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: IconsComponent }
    ])
  ]
})
export class IconsPageModule {
}
