import { Component, ViewChild, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { ScrollbarComponent } from 'ngx-scrollbar';
import { Subscription } from 'rxjs';
import { sideAnimation } from './app-routing.animations';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [sideAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit, OnDestroy {

  page;
  watcher: Subscription;

  @ViewChild(MatSidenav) sideNav: MatSidenav;
  @ViewChild(ScrollbarComponent) scrollEl: ScrollbarComponent;

  constructor(private router: Router) {
  }

  getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngAfterViewInit() {

    this.watcher = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap(() => this.sideNav.close())
      ).subscribe();
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}

