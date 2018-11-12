import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service'
import { AppUsersService } from '../services/appusers.service'

@Component({
  selector: 'forgotPass-page',
  templateUrl: './forgotPass.component.html',
  styleUrls: ['./forgotPass.component.css']
})
export class ForgotPassComponent implements OnInit {
  

  constructor(
    private router: Router,
    private loginService : LoginService,
    private cookieService : CookieService,
    private appusersService : AppUsersService,
    
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

    }

    username;
    appuser;

    sendEmail() {
      this.appusersService.getUser(this.username).subscribe(res => {
        this.appuser = res;
        this.appuser.userpassword = this.makeid();
        this.appuser.newuser = 1;
        this.appusersService.sendEmail(this.appuser, this.appuser.userpassword);
        this.appusersService.addUser(this.appuser).subscribe(res => {
          this.router.navigate(['/login/']);
      });
      })
      
    }

    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
    }
}