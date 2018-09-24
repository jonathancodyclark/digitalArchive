import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AppUsersService, AppUsers } from '../services/appusers.service';

@Component({
  selector: 'new-user-page',
  templateUrl: './newUser.component.html',
  styleUrls: ['./newUser.component.css']
})
export class NewUserComponent implements OnInit{
  title = 'New User Page';

  constructor(
    private router: Router,
    private appusersservice: AppUsersService
  ){}

  
  ngOnInit() {
  }

}