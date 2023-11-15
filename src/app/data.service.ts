import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './posting/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _url: string = "assets/data/data.json";  // Update the path here

  constructor(private http: HttpClient) {}

  getData(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this._url);
  }
}
