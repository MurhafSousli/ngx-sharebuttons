import { animate, state, style, transition, trigger } from '@angular/animations';

export const flipperAnimation = trigger('flip', [
  state('front', style({transform: 'rotateY(0)'})),
  state('back', style({transform: 'rotateY(180deg)'})),
  transition('back => front', [
    animate('600ms ease-in')
  ])
]);
