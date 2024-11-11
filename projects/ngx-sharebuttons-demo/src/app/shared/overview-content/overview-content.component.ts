import {
  Component,
  inject,
  signal,
  AfterViewInit,
  OnInit,
  OnDestroy,
  NgZone,
  WritableSignal,
  ChangeDetectionStrategy,
  PLATFORM_ID
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { Subscription, tap } from 'rxjs';
import { KebabCasePipe } from '../kebab-case.pipe';

@Component({
  standalone: true,
  selector: 'overview-content',
  template: `
    @for (link of links; track link.id) {
      @if (link.textContent | kebabCase; as id) {
        <div>
          <a routerLink="."
             [fragment]="id"
             [class.active]="activeLinkId() === id">
            {{ link.textContent }}
          </a>
        </div>
      }
    }
  `,
  styleUrl: './overview-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KebabCasePipe, RouterLink]
})
export class OverviewContentComponent implements OnInit, AfterViewInit, OnDestroy {

  readonly isBrowser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  private document: Document = inject(DOCUMENT);
  private scrollbar: NgScrollbar = inject(NgScrollbar, { skipSelf: true });
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private zone: NgZone = inject(NgZone);

  links: HTMLElement[];

  activeLinkId: WritableSignal<string> = signal('');

  private fragmentSub$: Subscription;

  ngOnInit(): void {
    this.links = Array.from(this.scrollbar.nativeElement.querySelectorAll('h2'));
    setTimeout(() => {
      this.activeLinkId.set(this.links[0].id);
    });
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.zone.runOutsideAngular(() => {
        const intersectionObserver: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.intersectionRatio > 0) {
              this.zone.run(() => {
                this.activeLinkId.set(entry.target.id);
              })
            }
          });
        }, {
          root: this.scrollbar.viewport.nativeElement,
          rootMargin: '0px 0px -50% 0px',
        });

        this.links.forEach((linkElement: HTMLElement) => {
          intersectionObserver.observe(linkElement);
        });

        setTimeout(() => {
          this.fragmentSub$ = this.activatedRoute.fragment.pipe(
            tap((fragment: string) => this.goToAnchor(fragment))
          ).subscribe();
        }, 300);
      });
    }
  }

  ngOnDestroy(): void {
    this.fragmentSub$?.unsubscribe();
  }

  goToAnchor(id: string): void {
    const el: HTMLElement = this.document.getElementById(id);
    if (el) {
      // this.scrollbar.scrollToElement(el);
      el.scrollIntoView();
    }
  }
}
