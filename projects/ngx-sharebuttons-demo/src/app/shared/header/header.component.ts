import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'header',
  template: `
    <div class="page-title" [class.title-mobile]="isHeadset()">
      <div class="container">
        <ng-content/>
      </div>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  isHeadset: Signal<boolean> = toSignal<boolean>(inject(BreakpointObserver).observe(Breakpoints.HandsetPortrait).pipe(
    map((result: BreakpointState) => (result.matches))
  ));
}
