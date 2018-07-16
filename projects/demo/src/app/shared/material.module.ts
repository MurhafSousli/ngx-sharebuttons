import { NgModule } from '@angular/core';

import {ObserversModule} from '@angular/cdk/observers';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatTooltipModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatTableModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSliderModule,
  MatFormFieldModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatTableModule,
  MatChipsModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatTooltipModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSliderModule,
  MatFormFieldModule,
  ObserversModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModule {
}
