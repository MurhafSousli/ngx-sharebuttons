import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, inject, OnInit, Output } from '@angular/core';
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { StorageMap } from '@ngx-pwa/local-storage';
import { MaterialModule } from '../material.module';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  imports: [MaterialModule, UpperCasePipe]
})
export class ThemeSwitcherComponent implements OnInit {

  private localStorage: StorageMap = inject(StorageMap);

  themes: string[] = [
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
  currIndex: number = 0;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    if (event.keyCode === RIGHT_ARROW) {
      this.next();
    }

    if (event.keyCode === LEFT_ARROW) {
      this.prev();
    }
  }

  ngOnInit(): void {
    this.localStorage.get('themeIndex').subscribe((index: number) => {
      this.currIndex = index || 0;
      this.themeChange.emit(this.themes[this.currIndex]);
    });
  }

  next(): void {
    if (this.currIndex + 1 < this.themes.length) {
      this.currIndex++;
      this.themeChange.emit(this.themes[this.currIndex]);
      this.localStorage.set('themeIndex', this.currIndex).subscribe();
    }
  }

  prev(): void {
    if (this.currIndex - 1 >= 0) {
      this.currIndex--;
      this.themeChange.emit(this.themes[this.currIndex]);
      this.localStorage.set('themeIndex', this.currIndex).subscribe();
    }
  }

}
