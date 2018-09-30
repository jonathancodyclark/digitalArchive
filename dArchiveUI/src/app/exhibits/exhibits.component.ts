import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table'

import { ExhibitService, Exhibit } from '../services/exhibit.service'
import { ArtifactService } from '../services/artifact.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'exhibits-page',
  templateUrl: './exhibits.component.html',
  styleUrls: ['./exhibits.component.css']
})
export class ExhibitsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'desc', 'open', 'edit', 'delete'];
  dataSource: MatTableDataSource<Exhibit>;
  title = "EXHIBITS"

  constructor(
    private exhibitService: ExhibitService,
    private artifactService: ArtifactService,
    private router: Router,
    private loginService : LoginService
    
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    if(this.loginService.loggedInAs == null) {
      this.router.navigate(['login/']); 
    }
  
    this.exhibitService.getExhibits().subscribe(res => {
      this.dataSource = new MatTableDataSource<Exhibit>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.data.sort();
    });
  }

  openExhibit(row: any) {
    this.artifactService.selectedExhibit = row.exhibitId;
    this.router.navigate(['artifacts/' + row.exhibitId]); 
  }

  addExhibit() {
    this.router.navigate(['exhibit-detail/']); 
  }

  editExhibit(row: any) {
    this.exhibitService.editedExhibit = row;
    this.router.navigate(['exhibit-detail/']); 
  }

  deleteExhibit(row: any) {
    this.exhibitService.deleteExhibit(row).subscribe(exhibit => {
      this.deleteRowDataTable(row, this.dataSource, this.dataSource.paginator);
    });
  }

  private deleteRowDataTable(row, dataSource, paginator) {
    dataSource.data.splice(dataSource.data.indexOf(row), 1);
    dataSource.paginator = paginator;
  }

  toUsers() {
    this.router.navigate(['manageusers/']); 
  }
}