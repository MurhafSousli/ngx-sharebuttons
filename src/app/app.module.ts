import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShareButtonsModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
