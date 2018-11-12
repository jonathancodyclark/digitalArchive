import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import { CookieService } from 'ngx-cookie-service'
import { AppUsersService, AppUsers } from '../services/appusers.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'changePass-page',
  templateUrl: './changePass.component.html',
  styleUrls: ['./changePass.component.css']
})
export class ChangePassComponent implements OnInit {
  
  title = 'New User Page';
  appuser : AppUsers = {
  userId : undefined,
  userpassword : '',
  firstname: '',
  lastname: '',
  userrole: '',
  useremail: '',
  newuser: 1,
  }

  constructor(
    private router: Router,
    private appusersservice: AppUsersService,
    private loginService : LoginService,
    private cookieService : CookieService
  ){}

  password1;
  password2;

  
  ngOnInit() {
    this.appuser = this.appusersservice.editedAppUser;
    console.log(this.appuser)

    if(this.cookieService.get('token') == '') {
      this.router.navigate(['login/']); 
    }
  }

    saveAppUser() {
      if (this.password1 == this.password2) {
        this.appuser.userpassword = this.password1
        this.appuser.newuser = 0;
        console.log(this.appuser);
        console.log(this.appuser.userpassword);
        this.appusersservice.addUser(this.appuser).subscribe(res => {
          this.loginService.logout();
          this.loginService.login(this.appuser.useremail, this.appuser.userpassword)
          this.router.navigate(['/exhibits/']);
        });
      }
    }
}