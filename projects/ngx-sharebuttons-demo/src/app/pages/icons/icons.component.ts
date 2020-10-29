import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  host: {
    class: 'page'
  },
  selector: 'icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconsComponent {

  code = {
    import: `import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  imports: [
    ShareIconsModule
  ]
})
export class AppModule { }`,
    icons: `import './icons';`,
    libraryMethod: `import { ShareButtonsModule } from 'ngx-sharebuttons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const icons = [
  // ... other icons
  faFacebookSquare
];

const shareProp = {
  facebook: {
    icon: ['fab', 'facebook-square']
  }
};

@NgModule({
  imports: [
    ShareButtonsModule.withConfig({ prop: shareProp })
  ]
})
export class AppModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(...icons);
  }
}`
  };

}
