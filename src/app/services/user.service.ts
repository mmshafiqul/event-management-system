import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedinUser?:User;

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<User> {
    return this.http.get<User>("http://localhost:3000/users/" + id)
  }

   userRegistration(user:User): Observable<unknown> {
    return this.http.post("http://localhost:3000/users", user)
  }

  findUserByEmail(email:string):Observable<User[]>{
    const params = new HttpParams().set('uEmail', email);
    return this.http.get<User[]>("http://localhost:3000/users",{params})
  }
  
}
