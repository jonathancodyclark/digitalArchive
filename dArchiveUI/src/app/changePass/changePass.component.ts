import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'changePass-page',
  templateUrl: './changePass.component.html',
  styleUrls: ['./changePass.component.css']
})
export class ChangePassComponent implements OnInit {
  

  constructor(
    private router: Router
    
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    console.log("part time twitch streamer");
    console.log("part time music producer");
    console.log("full time memer");
    }

    changePass() {
        //implement this
        //what happens after you enter new password on change password screen
    }
}