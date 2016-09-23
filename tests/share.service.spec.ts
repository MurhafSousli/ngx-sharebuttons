/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShareService } from './share.service';

describe('Service: Share', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareService]
    });
  });

  it('should ...', inject([ShareService], (service: ShareService) => {
    expect(service).toBeTruthy();
  }));
});
