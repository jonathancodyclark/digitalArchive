import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'forgotPass-page',
  templateUrl: './forgotPass.component.html',
  styleUrls: ['./forgotPass.component.css']
})
export class ForgotPassComponent implements OnInit {
  

  constructor(
    private router: Router
    
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    console.log("part time twitch streamer");
    console.log("part time music producer");
    console.log("full time memer");
    }

    emailEntered() {
        //implement this
        //what happens after you enter email on forgotPass screen and click button
    }
}