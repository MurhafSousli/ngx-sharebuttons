/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {ButtonProvider} from './share-helper';

describe('ButtonProvider', () => {
  it('should create an instance', (template, sharer) => {
    expect(new ButtonProvider(template, sharer)).toBeTruthy();
  });
});
