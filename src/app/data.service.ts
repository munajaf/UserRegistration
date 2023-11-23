import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './posting/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  //path of the data store
  //private _url: string = "assets/data/data.json"; 
  private _url: string = "https://jsonplaceholder.typicode.com/posts"; 

  constructor(private http: HttpClient) {}

  getData(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this._url);
  }

  getDataPost(postId: number): Observable<IPost> {
    const urlWithPostId = `${this._url}/${postId}`;
    return this.http.get<IPost>(urlWithPostId);
  }

 
  
  

  
}
