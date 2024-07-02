import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Froginfo } from './froginfo';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public getAllFrogInfo(): Observable<Froginfo[]> {
    return this.http.get<Froginfo[]>(`https://localhost:7128/api/TodoItems/GetFrogDatas`);
  }

  public getAllTodoItems(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`https://localhost:7128/api/TodoItems/GetTodoItems`);
  }

  // TODO: implement search by id, will be done when switching to C# webserver/database. 

  

  // public getFrogInfoByID(id: number): Observable<Froginfo[]> {
  //   return this.http.get<Froginfo[]>(`http://localhost:3000/frogs/${id}`);

  // }
}