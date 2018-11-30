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

    //verify the user is logged in and direct them to do so if they are not.
    if(this.cookieService.get('token') == '') {
      this.router.navigate(['login/']); 
    }
  }

    //record the change of password by saving in the backend, then
    //update the user to show they no longer need to change their password.
    saveAppUser() {
      if (this.password1 == this.password2) {
        this.appuser.userpassword = this.password1
        this.appuser.newuser = 0;
        this.appusersservice.updateUserAndPassword(this.appuser).subscribe(res => {
          this.loginService.logout();
          this.loginService.login(this.appuser.useremail, this.appuser.userpassword)
          this.router.navigate(['/exhibits/']);
        });
      }
    }
}