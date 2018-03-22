import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';

enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitcherComponent implements OnInit {

  themes = [
    'default',
    'material-light',
    'material-dark',
    'classic-light',
    'classic-dark',
    'modern-light',
    'modern-dark',
    'circles-dark',
    'circles-light',
    'outline'
  ];
  currIndex = 0;
  @Output() themeChange = new EventEmitter<string>();

  constructor(protected localStorage: AsyncLocalStorage) {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.next();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.prev();
    }
  }

  ngOnInit() {
    this.localStorage.getItem('themeIndex').subscribe((index) => {
      this.currIndex = index || 0;
      this.themeChange.emit(this.themes[this.currIndex]);
    });
  }

  next() {
    if (this.currIndex + 1 < this.themes.length) {
      this.currIndex++;
      this.themeChange.emit(this.themes[this.currIndex]);
      this.localStorage.setItem('themeIndex', this.currIndex).subscribe();
    }
  }

  prev() {
    if (this.currIndex - 1 >= 0) {
      this.currIndex--;
      this.themeChange.emit(this.themes[this.currIndex]);
      this.localStorage.setItem('themeIndex', this.currIndex).subscribe();
    }
  }

}
