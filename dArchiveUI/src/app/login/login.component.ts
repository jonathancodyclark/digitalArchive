import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ForgotPassComponent } from '../forgotPass/forgotPass.component';
import { CookieService } from 'ngx-cookie-service';
import { AppUsersService } from '../services/appusers.service';


@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private loginService : LoginService,
        private router : Router,
        private cookieService : CookieService,
        private appusersService : AppUsersService
    ) {}

    ngOnInit() {

    }

    username : string;
    password : string;

    login() {
        this.loginService.login(this.username, this.password).subscribe(res => {
            if(res) {
                this.cookieService.set('token',res['Token']);
                this.cookieService.set('email', this.username)
                
                this.appusersService.getUser(this.username).subscribe(res => {
                    var x = res["newuser"];
                    this.cookieService.set('userrole', res['userrole'])
                    if (x == 1) {
                        this.appusersService.editedAppUser = res;
                        this.router.navigate(['change/']);
                    } else {
                        this.router.navigate(['exhibits/']);
                    }
                    
                })
            } else {
                console.log("Didn't get a response from /token url!")
            }
        });
    }

}