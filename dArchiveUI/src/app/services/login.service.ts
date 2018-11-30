import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import { catchError } from 'rxjs/operators';
import { EMPTY, throwError } from 'rxjs';

@Injectable()
export class LoginService {

    //this.cookieService

    editedExhibit = undefined;
    backendUrl = 'http://localhost:8080/token';
    headers = new HttpHeaders({'Content-Type':'application/json'});
    options = { headers: this.headers};
    isSave = false;

    constructor(
        private http : HttpClient,
        private router : Router,
        private cookieService : CookieService
    ){}

    username;
    password;
    //login to account using username and password
    login(username : string, password : string) {
         return this.http.post(this.backendUrl, JSON.stringify({"useremail": `${username}`, "userpassword": `${password}`}),
         this.options).pipe();
    }
    //deletes local user data using cookieservice
    logout() {
        //this.token = null;
        this.cookieService.delete('token')
        this.cookieService.delete('email');
        this.cookieService.delete('userrole')
        this.router.navigate(['login/']); 
    }
    
    setIsSave(sav : boolean) {
        this.isSave = sav;
    }

}

