import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ShareButtonsModule } from '@ngx-share/buttons';
// import { ShareModule } from '@ngx-share/core';
import { AppComponent } from './app.component';
// import { ShareButtonModule } from '@ngx-share/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule.withConfig({
      debug: true
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
