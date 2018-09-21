import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator } from '@angular/material';
import { AppusersService } from '../services/appusers.service';

@Component({
  selector: 'appusers-page',
  templateUrl: './appusers.component.html',
  styleUrls: ['./appusers.component.css']
})
export class AppusersComponent {
  title = 'Manage Users Page'

  constructor(
    private router: Router,
    private appusersservice: AppusersService
    
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
}
