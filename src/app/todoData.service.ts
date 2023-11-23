import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo/todoData';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  //path of the data store
  private _url: string = "https://jsonplaceholder.typicode.com/todos"; 
  constructor(private http: HttpClient) {}
  getData(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this._url);
  }
  deletePost(postId: number): Observable<void> {
    const deleteUrl = `${this._url}/${postId}`; 
    return this.http.delete<void>(deleteUrl);
  }
 

}
