/** GPLUS DOCS: https://developers.google.com/+/web/share/#sharelink */

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { IShareButton, ShareButtonProp } from '../models/share-buttons.models';

export class GoogleButton implements IShareButton {

  constructor(public prop: ShareButtonProp, private http: HttpClient) {
  }

  link(url: string) {
    return this.prop.shareUrl + url;
  }

  count(url: string) {

    const body = getGoogleBody(url);

    return this.http.post<ICount>(this.prop.countUrl, body)
      .filter(res => res[0] && res[0].result && res[0].result.metadata
        && res[0].result.metadata.globalCounts && res[0].result.metadata.globalCounts.count)
      .map(res => +res[0].result.metadata.globalCounts.count)
      .catch(err => Observable.empty());
  }
}

/** Prepare google count request body   */
function getGoogleBody(url: string) {
  return [{
    method: 'pos.plusones.get',
    id: 'p',
    params: {
      nolog: true,
      id: url,
      source: 'widget',
      userId: '@viewer',
      groupId: '@self'
    },
    jsonrpc: '2.0',
    key: 'p',
    apiVersion: 'v1'
  }];
}

/** Google count interface */

interface GlobalCounts {
  count: number;
}

interface Metadata {
  type: string;
  globalCounts: GlobalCounts;
}

interface Result {
  kind: string;
  id: string;
  isSetByViewer: boolean;
  metadata: Metadata;
  abtk: string;
}

interface ICount {
  id: string;
  result: Result;
}
