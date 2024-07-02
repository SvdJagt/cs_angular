import { Injectable } from '@angular/core';
import { Froginfo } from './froginfo';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FrogsService {
  
  //url = 'http://localhost:3000/frogs';

  constructor(private http:HttpClient){}

  //private page = this.http.get("/frogs");
  // public getAllFrogInfo(): Observable<Froginfo[]> {
  //   const headerDict = {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //     'Access-Control-Allow-Headers': 'Content-Type',
  //   }
    
  //   const requestOptions = {                                                                                                                                                                                 
  //     headers: new HttpHeaders(headerDict), 
  //   };
    
  //   //return this.http.get(this.heroesUrl, requestOptions)
  //   return this.http.get<Froginfo[]>(`http://localhost:3000/frogs`, requestOptions);

  // public getAllFrogInfo() {
  //   const info = this.http.get("/frogs");
  //   return info;
  // }

  // async getAllFrogInfo() :  Promise<Froginfo[]> {
  //   const data = await fetch(this.url);
  //   return (await data.json()) ?? [];
  // }
 
  // async getFrogInfoByID(id: number): Promise<Froginfo | undefined> {
  //   const data = await fetch(`${this.url}/${id}`);
  //   return (await data.json()) ?? {};
  // }

  submitOpinion(name: string, email: string, opinion: string) {
    let getdiv = document.getElementById("opinions");
    getdiv!.innerHTML += 
      (
        `Your frog opinion: Name: ${name}, email: ${email}, opoinion: ${opinion}. `
      );
    
  }

}
