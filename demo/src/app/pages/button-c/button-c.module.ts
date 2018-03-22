import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonCComponent } from './button-c.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [ButtonCComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ButtonCComponent}
    ])
  ]

})
export class ShareButtonPageModule {
}
