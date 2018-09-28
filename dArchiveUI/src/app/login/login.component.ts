import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private loginService : LoginService
    ) {}

    ngOnInit() {

    }

    username : string;
    password : string;

    login() {
        this.loginService.login(this.username, this.password).subscribe(res => {
            console.log(res);
        });
    }

}