import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { CustomButtonComponent } from './custom-button.component';

@NgModule({
  declarations: [CustomButtonComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: CustomButtonComponent}
    ])
  ]
})
export class CustomButtonPageModule {
}
