import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
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

  constructor(protected localStorage: LocalStorage) {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === RIGHT_ARROW) {
      this.next();
    }

    if (event.keyCode === LEFT_ARROW) {
      this.prev();
    }
  }

  ngOnInit() {
    this.localStorage.getItem('themeIndex').subscribe((index: number) => {
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
