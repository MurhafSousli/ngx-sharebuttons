import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.style.scss')],
  template: `
    <header>
    </header>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {

}
