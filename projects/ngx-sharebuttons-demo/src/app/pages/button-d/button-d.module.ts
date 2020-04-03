import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonDComponent } from './button-d.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [ButtonDComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ButtonDComponent}
    ])
  ]

})
export class ShareDirectivePageModule {
}
