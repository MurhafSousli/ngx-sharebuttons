import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons/faCommentDollar';

// import { ShareService } from '../../../../../ngx-sharebuttons/src/public-api';
import { ShareService } from 'ngx-sharebuttons';

import { tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  host: {
    class: 'page'
  },
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomButtonComponent implements OnInit, OnDestroy {


  code = `constructor(private share: ShareService) {
}

ngOnInit() {
  this.share.addButton('customButton', {
    type: 'customButton',
    text: 'My Custom Button',
    icon: ['fas', 'fas-comments-dollar'],
    params: {
      // define the needed parameters here
    },
    // If the button uses a custom function, then set your custom function
    func: () => of({}).pipe(tap(() => alert('Custom button works!')))
  });
}`;

  constructor(private share: ShareService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Add Custom Button');

    this.share.addButton('customButton', {
      type: 'customButton',
      text: 'customButton',
      color: '#ba3b1a',
      icon: faCommentDollar,
      func: () => of({}).pipe(tap(() => alert('Custom button works!')))
    });
  }

  ngOnDestroy() {
    const config = this.share.config;
    delete (config.prop as any).customButton;
    this.share.config$.next({...config, prop: config.prop});
  }
}
