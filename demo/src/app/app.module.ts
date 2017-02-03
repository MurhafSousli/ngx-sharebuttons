import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ShareButtonsModule } from 'ng2-sharebuttons';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomComponent } from './custom/custom.component';

import { SingleComponent } from './single/single.component';
import { IntegrationComponent } from './integration/integration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomComponent,
    SingleComponent,
    IntegrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ShareButtonsModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
