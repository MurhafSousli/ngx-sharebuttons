import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {

  code = {
    lazyImport : `// in root module
@NgModule({
  imports: [
    ShareButtonsModule.forRoot()
  ]
})
export class AppModule { }

// in lazy module
@NgModule({
  imports: [
    ShareButtonsModule
  ]
})
export class MyLazyModule { }`,
    includeOrder: `import { ShareButtonsOptions } from '@ngx-share/core';
import { ShareButtonsModule } from '@ngx-share/buttons';

options: ShareButtonsOptions = {
  include: ['facebook', 'twitter', 'pinterest']
}

@NgModule({
 imports: [
   ShareButtonsModule.forRoot(options)
 ]
})`,
    buttonsOrder: `<share-buttons [include]="['telegram', 'twitter', 'pinterest', 'whatsapp']"></share-buttons>`,
    metaTags: `<meta property="og:title" content="European Travel Destinations">
<meta property="og:description" content="Offering tour packages for individuals or groups.">
<meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
<meta property="og:url" content="http://euro-travel-example.com/index.html">`
    , buttonText: '<share-button button="pinterest" text="Pin" showText="true"></share-button>'
  };

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Frequently Asked Questions');
  }

}
