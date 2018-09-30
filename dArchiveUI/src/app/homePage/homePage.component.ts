import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'home-page',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomePageComponent implements OnInit {
  

  constructor(
    private router: Router
    
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    console.log("part time twitch streamer");
    console.log("part time music producer");
    console.log("full time memer");
    }
}
