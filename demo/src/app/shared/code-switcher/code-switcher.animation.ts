import { animate, state, style, transition, trigger } from '@angular/animations';

export const flipperAnimation = trigger('flip', [
  state('front', style({transform: 'rotateY(0)' })),
  transition('back => front', [
    style({transform: 'rotateY(180deg)'}),
    animate('600ms ease-in')
  ]),
  state('front', style({transform: 'rotateY(0)' })),
  state('back', style({transform: 'rotateY(180deg)'})),
  transition('front => back', [
    style({transform: 'rotateY(0)'}),
    animate('600ms ease-out')
  ]),
  state('back', style({transform: 'rotateY(180deg)'})),
]);
