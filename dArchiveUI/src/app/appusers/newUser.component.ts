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

  constructor(
    private router: Router,
    private appusersservice: AppUsersService,
    private loginService : LoginService
  ){}

  
  ngOnInit() {
    if(this.loginService.loggedInAs == null) {
      this.router.navigate(['login/']); 
    } else if (this.loginService.loggedInAs == 'user') {
      this.router.navigate(['exhibits/']); 
    }
  }

}