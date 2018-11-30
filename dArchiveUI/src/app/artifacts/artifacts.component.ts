import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';

import { ArtifactService, Artifact } from '../services/artifact.service';
import { ExhibitService, Exhibit } from '../services/exhibit.service'
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service'
import { AppUsersService } from '../services/appusers.service';

import { DialogArtifactsDeleteComponent } from '../dialogBoxes/dialogArtifactsDelete.component';

@Component({
  selector: 'artifacts-page',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'image', 'exhibitId', 'desc', 'onDisplay', 'edit', 'delete'];
  dataSource: MatTableDataSource<Artifact>;

  exhibit : Exhibit = {
    name: '',
    exhibitId: undefined,
    description: ''

  };  
  title;


  constructor(
    private exhibitService: ExhibitService,
    private artifactService: ArtifactService,
    private router: Router,
    private loginService : LoginService,
    private cookieService : CookieService,
    private appusersService : AppUsersService,
    private dialog : MatDialog
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    //check that user is logged in and navigate them to do so if they are not
    if(this.cookieService.get('token') == '') {
      this.router.navigate(['login/']); 
    }

    //verify that they are using their own password and not an auto-generated one
    //if they are using an auto-generated one have the user change it
    this.appusersService.getUser(this.cookieService.get('email')).subscribe(res => {
      var x = res["newuser"];
      if (x == 1) {
          this.appusersService.editedAppUser = res;
          this.router.navigate(['change/']);
      } else {
          //nothing
      }
      //retrieve list of artifacts
      this.artifactService.getArtifacts().subscribe(res => {
        this.dataSource = new MatTableDataSource<Artifact>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.data.sort();
      });
    })
    this.exhibitService.getExhibit(parseInt(this.router.url.replace('/artifacts/', ''))).subscribe(res => {
      
      //set exhibit to exhibit from db  
      this.exhibit = res;
      this.title = this.exhibit.name;
      
    });

    
  }

  //navigate back to exhibits page, for html use.
  backToExhibits() {
    this.router.navigate(['/exhibits']); 
  }
  //navigate to profile page
  toProfile() {
    this.router.navigate(['/profile']);
  }

  //record artifact to be edited and navigate to the add/edit artifact page
  editArtifact(row: any) {
    this.artifactService.editedArtifact = row;
    this.router.navigate(['artifact-detail/']); 
  }

  //navigate to the add artifact page and record which exhibit we are inside in order to
  //return later
  addArtifact() {
    this.cookieService.set('exhibit', this.router.url.replace('/artifacts/', ''))
    //this.artifactService.selectedExhibit = this.router.url.replace('/artifacts/', '');
    this.router.navigate(['artifact-detail/']); 
  }

  //delete the selected artifact from the database
  //then delete locally from page.
  deleteArtifact(row: any) {
    const dialogRef = this.dialog.open(DialogArtifactsDeleteComponent);
    dialogRef.afterClosed().subscribe(() => {
      if (this.artifactService.isDelete == true) {
        this.artifactService.deleteArtifact(row).subscribe(artifact => {
          this.deleteRowDataTable(row, this.dataSource, this.dataSource.paginator);
        });
      }
    });
  }

  /* filters the results of the current table */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //helper method to delete artifact from this page locally
  private deleteRowDataTable(row, dataSource, paginator) {
    dataSource.data.splice(dataSource.data.indexOf(row), 1);
    dataSource.paginator = paginator;
  }
  
}