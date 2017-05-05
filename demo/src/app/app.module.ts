import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MdButtonModule} from '@angular/material';
import {SharedModule} from './shared/shared.module';
import {ShareButtonsModule} from 'ng2-sharebuttons';

// import {ShareButtonsModule} from './sharebuttons';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {InstallationComponent} from './installation/installation.component';
import {UsageComponent} from './usage/usage.component';
import {CustomComponent} from './custom/custom.component';
import {IntegrationComponent} from './integration/integration.component';
import {FooterComponent} from './footer/footer.component';
import { NotesComponent } from './notes/notes.component';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstallationComponent,
    UsageComponent,
    CustomComponent,
    IntegrationComponent,
    FooterComponent,
    NotesComponent,
    SingleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ShareButtonsModule.forRoot(),
    HttpModule,
    SharedModule,
    MdButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
