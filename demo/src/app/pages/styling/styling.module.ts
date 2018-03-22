import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StylingComponent } from './styling.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [StylingComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: StylingComponent}
    ])
  ]

})
export class StylingPageModule {
}
