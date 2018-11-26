import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service'


export class AppUsers {
  userId : number;
  userpassword : string;
  firstname: string;
  lastname: string;
  userrole: string;
  useremail: string;
  newuser: number;

  constructor (
    userId : number,
    userpassword : string,
    firstname: string,
    lastname: string,
    userrole: string,
    useremail: string,
    newuser: number,
  ){}
} 

@Injectable({
  providedIn: 'root'
})
export class AppUsersService {

  editedAppUser;
  backendUrl = 'http://localhost:8080/users';
  options = {headers: {'Content-Type':'application/json','Authorization': `${this.cookieService.get('token')}`}};
  isDelete = false;
  isSave = false;

  constructor(
    private http : HttpClient,
    private router: Router,
    private loginService: LoginService,
    private cookieService : CookieService
  ){}

  getUsers() {
    return this.http.get<AppUsers[]>(this.backendUrl + '/all/', this.options);
  }

  getUser(useremail : string) {
    return this.http.get<AppUsers>(this.backendUrl + `/getByEmail/${useremail}/`, this.options);
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

  sendEmail(appuser : AppUsers, password: string) {
    this.http.post(`http://localhost:8080/send/${password}`, JSON.stringify(appuser), this.options).subscribe(data => {
      console.log(data);
    });
  }

  setIsDelete(del : boolean) {
    this.isDelete = del;
  }

  setIsSave(sav : boolean) {
    this.isSave = sav;
  }
}