import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'

@Injectable()
export class LoginService {

    //this.cookieService

    editedExhibit = undefined;
    backendUrl = 'http://localhost:8080/token';
    headers = new HttpHeaders({'Content-Type':'application/json'});
    options = { headers: this.headers};

    constructor(
        private http : HttpClient,
        private router : Router,
        private cookieService : CookieService
    ){}


    login(username : string, password : string) {
         return this.http.post(this.backendUrl, JSON.stringify({"useremail": `${username}`, "userpassword": `${password}`}),
         this.options).pipe();
    }

    logout() {
        //this.token = null;
        this.cookieService.delete('token')
        this.router.navigate(['login/']); 
    }
}

