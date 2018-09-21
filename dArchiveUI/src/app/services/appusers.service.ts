import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

export class Appusers {
  usersid : number;
  username : string;
  password: string;
  email: string;

  constructor (
    usersid : number,
    username : string,
    password: string,
    email: string
  ){}
} 

@Injectable()
export class AppusersService {

  selectedExhibit;
  editedArtifact;
  backendUrl = 'http://localhost:8080/users';
  headers = new HttpHeaders({'Content-Type':'application/json'});
  options = {headers: this.headers};

  constructor(
    private http : HttpClient,
    private router: Router
  ){}

  getUsers() {
    return this.http.get<Appusers[]>(this.backendUrl + '/all/', this.options);
  }

  addUser(user: Appusers) { 
    return this.http.post(this.backendUrl + '/postAppUsers/', JSON.stringify(user), this.options).pipe();
  }

  updateUser(user : Appusers) {
    return this.http.put(this.backendUrl + '/update/' + user.usersid, JSON.stringify(user), this.options).pipe();
  }

  deleteUser(user : Appusers) {
    return this.http.delete(this.backendUrl + '/delete/' + user.usersid, this.options).pipe();
  }
}