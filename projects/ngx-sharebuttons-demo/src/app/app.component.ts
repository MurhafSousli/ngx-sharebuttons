import { Component, ViewChild, inject, effect, Signal, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { map, filter } from 'rxjs';
import { sideAnimation } from './app-routing.animations';
import { SharedModule } from './shared';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBook, faCoffee, faInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  host: {
    '[class.mobile]': 'isHeadset()'
  },
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [sideAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule]
})
export class AppComponent {

  isHeadset: Signal<boolean> = toSignal<boolean>(inject(BreakpointObserver).observe(Breakpoints.HandsetPortrait).pipe(
    map((result: BreakpointState) => (result.matches))
  ));

  routeChanged: Signal<any> = toSignal(inject(Router).events.pipe(
    filter(event => event instanceof NavigationEnd)
  ));

  @ViewChild(MatSidenav, { static: true }) sideNav: MatSidenav;

  getState(outlet: RouterOutlet): ActivatedRoute {
    return outlet.isActivated ? outlet.activatedRoute : null;
  }

  constructor(iconLibrary: FaIconLibrary) {
    // Add icons
    iconLibrary.addIcons(faInfo, faBook, faCoffee);

    effect(() => {
      if (this.routeChanged()) {
        this.sideNav.close();
      }
    });
  }
}

