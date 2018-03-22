import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalOptionsComponent } from './global-options.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [GlobalOptionsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: GlobalOptionsComponent}
    ])
  ]

})
export class GlobalOptionsPageModule {
}
