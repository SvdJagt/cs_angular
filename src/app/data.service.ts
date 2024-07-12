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
    return this.http.get<Froginfo[]>(`https://localhost:7128/api/TodoItems/GetFrogs`);
  }

  public getAllTodoItems(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`https://localhost:7128/api/TodoItems/GetTodoItems`);
  }

  public postTodoItem(todo: Todo) : void {
    this.http.post(`https://localhost:7128/api/TodoItems/PostTodoItem`, todo).subscribe();
  }

  public deleteTodoItem(id: number) : void {
    this.http.delete(`https://localhost:7128/api/TodoItems/${id}`).subscribe();
  }

  public changeTodoItem(id: number, todo: Todo) : void {
    this.http.put(`https://localhost:7128/api/TodoItems/${id}`, todo).subscribe();
  }

  

  public getFrogInfoByID(id: number): Observable<Froginfo> {
    return this.http.get<Froginfo>(`https://localhost:7128/api/TodoItems/GetFrog/${id}`);

  }


  submitOpinion(name: string, email: string, opinion: string) {
    let getdiv = document.getElementById("opinions");
    getdiv!.innerHTML += 
      (
        `Your frog opinion: name: ${name}, email: ${email}, opoinion: ${opinion}. `
      );
    
  }
}