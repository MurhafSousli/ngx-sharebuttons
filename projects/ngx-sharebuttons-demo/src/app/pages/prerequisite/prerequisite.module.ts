import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrerequisiteComponent } from './prerequisite.component';
import { SharedModule } from '../../shared';


@NgModule({
  declarations: [
    PrerequisiteComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: PrerequisiteComponent }
    ])
  ]
})
export class PrerequisiteModule {
}
