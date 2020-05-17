import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PopupButtonsComponent } from './popup-buttons.component';
import { SharedModule } from '../../shared';


@NgModule({
  declarations: [PopupButtonsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: PopupButtonsComponent}
    ])
  ]
})
export class PopupButtonsPageModule {
}
