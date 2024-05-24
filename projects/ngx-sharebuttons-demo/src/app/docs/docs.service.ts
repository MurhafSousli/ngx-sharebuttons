import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs';
import { ApiData } from './docs.class';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  private readonly baseUrl: string = 'assets/data/';

  private http: HttpClient = inject(HttpClient);

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

