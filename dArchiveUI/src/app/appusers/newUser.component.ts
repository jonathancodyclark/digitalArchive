import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AppUsersService, AppUsers } from '../services/appusers.service';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'new-user-page',
  templateUrl: './newUser.component.html',
  styleUrls: ['./newUser.component.css']
})
export class NewUserComponent implements OnInit{

  title = 'New User Page';
  editing;
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

  
  ngOnInit() {
    if(this.cookieService.get('token') == '') {
      this.router.navigate(['login/']); 
    }

    this.editing = false;
    if(this.appusersservice.editedAppUser != undefined) {
        this.editing = true;
        this.appuser = this.appusersservice.editedAppUser;
        this.appusersservice.editedAppUser = undefined;
        this.appuser.newuser = 1;
    }
  }


    backToAppUsersPage() {
        this.router.navigate(['/manageusers/']);
    }

    sendEmail() {
        this.appusersservice.sendEmail(this.appuser, this.appuser.userpassword);
    }

    saveAppUser() {
        if(this.editing) {
            this.appusersservice.updateUser(this.appuser).subscribe(res => {
                this.router.navigate(['/manageusers/']);
            });
        } else {
            this.appuser.userpassword = this.makeid();
            this.sendEmail();
            this.appusersservice.addUser(this.appuser).subscribe(res => {
                this.router.navigate(['/manageusers/']);
            });
        }
    }

    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
    }


}