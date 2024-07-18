import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Froginfo } from './froginfo';
import { Todo } from './todo';
import { IFormStructure } from './form-structure';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public getAllFrogInfo(): Observable<Froginfo[]> {
    return this.http.get<Froginfo[]>(`https://localhost:7128/api/Frogs`);
  }

  public getAllTodoItems(): Observable<Todo[]> {
    // return this.http.get<Todo[]>(`https://localhost:7128/api/TodoItems/GetTodoItems`);
    return this.http.get<Todo[]>(`https://localhost:7128/api/TodoItems`);
    
  }

  public postTodoItem(todo: Todo) : void {
    this.http.post(`https://localhost:7128/api/TodoItems`, todo).subscribe();
  }

  public deleteTodoItem(id: number) : void {
    this.http.delete(`https://localhost:7128/api/TodoItems/${id}`).subscribe();
  }

  public changeTodoItem(id: number, todo: Todo) : void {
    this.http.put(`https://localhost:7128/api/TodoItems/${id}`, todo).subscribe();
  }

  

  public getFrogInfoByID(id: number): Observable<Froginfo> {
    return this.http.get<Froginfo>(`https://localhost:7128/api/Frogs/${id}`);

  }

  public getForm(name: string): Observable<IFormStructure[]> {
    return this.http.get<IFormStructure[]>(`https://localhost:7128/api/Forms/${name}`);

  }


  submitOpinion(name: string, email: string, opinion: string) {
    let getdiv = document.getElementById("opinions");
    getdiv!.innerHTML += 
      (
        `Your frog opinion: name: ${name}, email: ${email}, opoinion: ${opinion}. `
      );
    
  }
}