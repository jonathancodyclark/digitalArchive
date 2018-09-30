import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


export class AppUsers {
  userId : number;
  userpassword : string;
  firstname: string;
  lastname: string;
  userrole: string;
  useremail: string;

  constructor (
    userId : number,
    userpassword : string,
    firstname: string,
    lastname: string,
    userrole: string,
    useremail: string
  ){}
} 

@Injectable({
  providedIn: 'root'
})
export class AppUsersService {

  editedAppUser;
  backendUrl = 'http://localhost:8080/users';
  headers = new HttpHeaders({'Content-Type':'application/json'});
  options = {headers: this.headers};

  constructor(
    private http : HttpClient,
    private router: Router
  ){}

  getUsers() {
    return this.http.get<AppUsers[]>(this.backendUrl + '/all/', this.options);
  }

  addUser(user: AppUsers) { 
    return this.http.post(this.backendUrl + '/postAppUsers/', JSON.stringify(user), this.options).pipe();
  }

  updateUser(user: AppUsers) {
    return this.http.put(this.backendUrl + '/update/' + user.userId, JSON.stringify(user), this.options).pipe();
  }

  deleteUser(user: AppUsers) {
    return this.http.delete(this.backendUrl + '/delete/' + user.userId, this.options).pipe();
  }
}