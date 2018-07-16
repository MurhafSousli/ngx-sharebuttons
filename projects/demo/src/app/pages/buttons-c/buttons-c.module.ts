import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsCComponent } from './buttons-c.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [ButtonsCComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ButtonsCComponent}
    ])
  ]
})
export class ShareButtonsPageModule {
}
