import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AppUsersService, AppUsers } from '../services/appusers.service';
import { LoginService } from '../services/login.service';

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
  useremail: ''
  }

  constructor(
    private router: Router,
    private appusersservice: AppUsersService,
    private loginService : LoginService
  ){}

  
  ngOnInit() {
    if(this.loginService.token == null) {
      this.router.navigate(['login/']); 
    } else {
      this.router.navigate(['exhibits/']); 
    }

    this.editing = false;
    if(this.appusersservice.editedAppUser != undefined) {
        this.editing = true;
        this.appuser = this.appusersservice.editedAppUser;
        this.appusersservice.editedAppUser = undefined;
    }
  }


backToAppUsersPage() {
    this.router.navigate(['/manageusers/']);
}

saveAppUser() {
    if(this.editing) {
        this.appusersservice.updateUser(this.appuser).subscribe(res => {
            this.router.navigate(['/manageusers/']);
        });
    } else {
        this.appusersservice.addUser(this.appuser).subscribe(res => {
            this.router.navigate(['/manageusers/']);
        });
    }
}


}