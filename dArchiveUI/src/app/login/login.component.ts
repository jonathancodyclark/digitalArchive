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


    username : string;
    password : string;

    login() {
        this.loginService.login(this.username, this.password).subscribe(res => {
            if(res) {
                this.loginService.token = res['Token'];
                this.router.navigate(['exhibits/']);
            } else {
                console.log("Didn't get a response from /token url!")
            }
        });
    }

}