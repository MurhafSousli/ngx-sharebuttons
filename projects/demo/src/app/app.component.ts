import { Component, ViewChild, AfterViewInit, OnDestroy, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { NgScrollbar } from 'ngx-scrollbar';
import { sideAnimation } from './app-routing.animations';

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
  @ViewChild(NgScrollbar) scrollEl: NgScrollbar;
  @HostBinding('class.mobile') isMobile: boolean;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).pipe(
      tap((result: BreakpointState) => this.isMobile = result.matches)
    ).subscribe();
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

