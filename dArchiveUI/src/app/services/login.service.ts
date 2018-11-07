import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    token = null;

    editedExhibit = undefined;
    backendUrl = 'http://localhost:8080/token';
    headers = new HttpHeaders({'Content-Type':'application/json'});
    options = { headers: this.headers};

    constructor(
        private http : HttpClient,
        private router : Router
    ){}


    login(username : string, password : string) {
         return this.http.post(this.backendUrl, JSON.stringify({"useremail": `${username}`, "userpassword": `${password}`}),
         this.options).pipe();
    }

    logout() {
        this.token = null;
        this.router.navigate(['login/']); 
    }
}

