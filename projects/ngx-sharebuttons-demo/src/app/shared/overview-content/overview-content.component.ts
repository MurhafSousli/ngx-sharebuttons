import { Component, SkipSelf, AfterViewInit, OnInit, OnDestroy, ChangeDetectionStrategy, NgZone, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'overview-content',
  template: `
    <div *ngFor="let link of links">
      <a *ngIf="link.textContent | kebabCase as id"
         routerLink="."
         [fragment]="id"
         [class.active]="activeLinkId === id"
         (click)="goToAnchor(id)">
        {{ link.textContent }}
      </a>
    </div>
  `,
  styleUrls: ['./overview-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewContentComponent implements OnInit, AfterViewInit, OnDestroy {

  links: HTMLElement[];

  activeLinkId: string;

  private fragmentSub$: Subscription;
  private scrollSub$: Subscription;

  constructor(@SkipSelf() private scrollbar: NgScrollbar,
              private activatedRoute: ActivatedRoute,
              private cd: ChangeDetectorRef,
              private zone: NgZone) {
  }

  ngOnInit(): void {
    this.links = Array.from(this.scrollbar.viewport.nativeElement.querySelectorAll('h2'));
    setTimeout(() => {
      this.activeLinkId = this.links[0].id;
      this.cd.markForCheck();
    });
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.scrollSub$ = this.scrollbar.scrolled.pipe(
        debounceTime(50),
        tap((e: any) => this.zone.run(() => {
          const scrollPosition: number = e.target.scrollTop;
          // Find the element that contains the scroll position
          let activeLink: HTMLElement = null;
          this.links.forEach((link: HTMLElement) => {
            if (link.offsetTop - 20 <= scrollPosition) {
              activeLink = link;
            }
          });

          if (activeLink) {
            this.activeLinkId = activeLink.id;
          } else {
            this.activeLinkId = this.links[0].id;
          }
          this.cd.markForCheck();
        }))
      ).subscribe();

      setTimeout(() => {
        this.fragmentSub$ = this.activatedRoute.fragment.pipe(
          tap((fragment: string) => this.goToAnchor(fragment))
        ).subscribe();
      }, 300);
    });
  }

  ngOnDestroy(): void {
    this.scrollSub$?.unsubscribe();
    this.fragmentSub$?.unsubscribe();
  }

  goToAnchor(id: string): void {
    const el: HTMLElement = document.getElementById(id);
    if (el) {
      this.scrollbar.scrollToElement(el, { top: -20 });
    }
  }
}
