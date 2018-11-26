import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';


import { ExhibitService, Exhibit } from '../services/exhibit.service'
import { ArtifactService } from '../services/artifact.service';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service'
import { AppUsersService, AppUsers } from '../services/appusers.service'

@Component({
  selector: 'profile-page',
  templateUrl: './profilePage.component.html',
  styleUrls: ['./profilePage.component.css']
})
export class ProfilePageComponent implements OnInit {
  
  title = "PROFILE";
  editing = 1;
  user : AppUsers = {
    userId : undefined,
    userpassword : '',
    firstname: '',
    lastname: '',
    userrole: '',
    useremail: '',
    newuser: undefined,
};

  constructor(
    private exhibitService: ExhibitService,
    private router: Router,
    private cookieService : CookieService,
    private appusersService : AppUsersService,
    private loginService : LoginService,
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    //check that the user is logged in and direct them to do so if they are not.
    if(this.cookieService.get('token') == '') {
      this.router.navigate(['login/']); 
    }

    //verify that they are using their own password and not an auto-generated one
    //if they are using an auto-generated one have the user change it
    this.appusersService.getUser(this.cookieService.get('email')).subscribe(res => {
        var x = res["newuser"];
        
        //set user to user from db  
        this.user = res;
        console.log(res);
        if (x == 1) {
            this.appusersService.editedAppUser = res;
            this.router.navigate(['change/']);
        } else {
            //nothing
        }
        
    })
   console.log(this.user);


  }

  // navigates to the exhibits page 
  toExhibits() {
    this.router.navigate(['exhibits/']); 
  }
  // navigates to the users page
  toUsers() {
    console.log('hi');
    this.router.navigate(['manageusers/']); 
  }
  /* Saves the changes made to the user */
  saveUser() {
    console.log(this.user);
    if(this.editing) {
        this.appusersService.updateUser(this.user).subscribe(user => {
            this.router.navigate(['/exhibits']);
        });
    }
  }
   /* Opens the exhibits page */
   backToExhibits() {
    this.router.navigate(['/exhibits']); 
  }
  
}
