import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entity/User.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[];

  constructor(private http:HttpClient) { }

  getData(){
    
    let url = "https://gorest.co.in/public/v2/users";
    return this.http.get<any>(url);
  }
}
