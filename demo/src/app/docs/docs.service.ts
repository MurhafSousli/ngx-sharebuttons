import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiData } from './docs.class';
import { shareReplay } from 'rxjs/operators/shareReplay';

@Injectable()
export class DocsService {

  baseUrl = 'assets/data/';

  constructor(private http: HttpClient) {
  }

  getDirectiveApi() {
    return this.fetch('directive-api.json');
  }

  getComponentApi() {
    return this.fetch('component-api.json');
  }

  getContainerApi() {
    return this.fetch('container-api.json');
  }

  getOptionsApi() {
    return this.fetch('options-api.json');
  }

  private fetch(filename: string) {
    return this.http.get<ApiData>(this.baseUrl + filename).pipe(
      shareReplay(1)
    );
  }

}
