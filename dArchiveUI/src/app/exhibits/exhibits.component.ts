import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table'

import { ExhibitService, Exhibit } from '../services/exhibit.service'
import { ArtifactService } from '../services/artifact.service';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service'
import { AppUsersService } from '../services/appusers.service'

import { DialogExhibitsDeleteComponent } from '../dialogBoxes/dialogExhibitsDelete.component';

@Component({
  selector: 'exhibits-page',
  templateUrl: './exhibits.component.html',
  styleUrls: ['./exhibits.component.css']
})
export class ExhibitsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'desc', 'open', 'edit', 'delete'];
  dataSource: MatTableDataSource<Exhibit>;
  title = "EXHIBITS";
  hideusers = false

  constructor(
    private exhibitService: ExhibitService,
    private artifactService: ArtifactService,
    private router: Router,
    private loginService : LoginService,
    private cookieService : CookieService,
    private appusersService : AppUsersService,
    private dialog : MatDialog,
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  

  ngOnInit() {
    //check whether the user is logged in and direct them to do so if not.
    if(this.cookieService.get('token') == '') {
      this.router.navigate(['login/']); 
    }

    this.hideusers = this.cookieService.get('userrole') == 'ADMIN'
    

    
    this.appusersService.getUser(this.cookieService.get('email')).subscribe(res => {
      var x = res["newuser"];
      if (x == 1) {
          this.appusersService.editedAppUser = res;
          this.router.navigate(['change/']);
      } else {
          //nothing
      }
      
    })
  
    this.exhibitService.getExhibits().subscribe(res => {
      this.dataSource = new MatTableDataSource<Exhibit>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.data.sort();
    });
  }

  /* Opens the artifacts page associated with the exhibit */
  openExhibit(row: any) {
    this.cookieService.set('exhibit', row.exhibitId)
    //this.artifactService.selectedExhibit = row.exhibitId;
    this.router.navigate(['artifacts/' + row.exhibitId]); 
  }

  /* Opens the new exhibit page where users can add new exhibits */
  addExhibit() {
    this.router.navigate(['exhibit-detail/']); 
  }

  /* Opens the edit exhibit page for the specific exhibit */
  editExhibit(row: any) {
    this.exhibitService.editedExhibit = row;
    this.router.navigate(['exhibit-detail/']); 
  }

  /* filters the results of the current table */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /* Deletes the exhibit from the table by deleting the row associted
  with the exhibit */
  deleteExhibit(row: any) {
    const dialogRef = this.dialog.open(DialogExhibitsDeleteComponent);
    dialogRef.afterClosed().subscribe(() => {
      if (this.exhibitService.isDelete == true) {
        this.exhibitService.deleteExhibit(row).subscribe(exhibit => {
          this.deleteRowDataTable(row, this.dataSource, this.dataSource.paginator);
        });
      }
    });
   }

  /* Helper method for the deleteExhibit method */
  private deleteRowDataTable(row, dataSource, paginator) {
    dataSource.data.splice(dataSource.data.indexOf(row), 1);
    dataSource.paginator = paginator;
  }

  /* Opens the manage users page */
  toUsers() {
    this.router.navigate(['manageusers/']); 
  }
  /* Opens the profile page */
  toProfile() {
    this.router.navigate(['profile/']);
  }
}
