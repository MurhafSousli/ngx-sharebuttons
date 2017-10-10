import { animate, state, style, transition, trigger } from '@angular/animations';

export const buttonsAnimation = trigger('buttons', [
  state('void', style({transform: 'translateX(-25%) scale(0.99)', opacity: 0})),
  state('enter', style({transform: 'translateX(0%) scale(0.99)', opacity: 1})),
  state('exit', style({transform: 'translateX(-25%)', opacity: 0})),
  transition('* => *', animate('400ms cubic-bezier(0.25, 0.5, 0.25, 0.4)')),
]);



