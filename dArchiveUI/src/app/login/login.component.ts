import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ForgotPassComponent } from '../forgotPass/forgotPass.component';


@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private loginService : LoginService,
        private router : Router
    ) {}

    ngOnInit() {

    }

    loginfailed = false;
    username : string;
    password : string;

    login() {
        this.loginService.login(this.username, this.password).subscribe(res => {
            console.log(res);
            if(res) {
                this.router.navigate(['exhibits/']); 
                this.loginService.loggedInAs = res['userrole'];
                console.log(this.loginService.loggedInAs)
            } else {
                this.loginfailed = true;
            }
        });
    }

}