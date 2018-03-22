import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

export interface ApiData {
  name?: string;
  type?: string;
  description?: string;
}

export class ApiDatabase {

  dataChange: BehaviorSubject<ApiData[]> = new BehaviorSubject<ApiData[]>([]);

  constructor(stream: Observable<any>) {
    stream.subscribe((res) => {
      this.dataChange.next(res);
    });
  }

}

export class ApiDataSource extends DataSource<any> {

  constructor(private _apiDatabase: ApiDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ApiData[]> {
    return this._apiDatabase.dataChange;
  }

  disconnect() {
  }
}
