import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  postNew(user: User){
    return this.http.post<User>('http://localhost:3000/nevek', user);
  }

  getAllUser(){
    return this.http.get<any>('http://localhost:3000/nevek');
  }
}
