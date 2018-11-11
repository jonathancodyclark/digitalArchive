import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';

import { ArtifactService, Artifact } from '../services/artifact.service'
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service'
import { AppUsersService } from '../services/appusers.service';

@Component({
  selector: 'artifacts-page',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'image', 'exhibitId', 'desc', 'onDisplay', 'edit', 'delete'];
  dataSource: MatTableDataSource<Artifact>;
  title = this.router.url.replace('/artifacts/', '');

  constructor(
    private artifactService: ArtifactService,
    private router: Router,
    private loginService : LoginService,
    private cookieService : CookieService,
    private appusersService : AppUsersService,
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    if(this.cookieService.get('token') == '') {
      this.router.navigate(['login/']); 
    }

    this.appusersService.getUser(this.cookieService.get('email')).subscribe(res => {
      var x = res["newuser"];
      console.log(res);
      if (x == 1) {
          this.appusersService.editedAppUser = res;
          this.router.navigate(['change/']);
      } else {
          //nothing
      }
      
    })

    this.artifactService.getArtifacts().subscribe(res => {
      this.dataSource = new MatTableDataSource<Artifact>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.data.sort();
    });
  }

  backToExhibits() {
    this.router.navigate(['/exhibits']); 
  }

  editArtifact(row: any) {
    this.artifactService.editedArtifact = row;
    this.router.navigate(['artifact-detail/']); 
  }

  addArtifact() {
    this.artifactService.selectedExhibit = this.router.url.replace('/artifacts/', '');
    this.router.navigate(['artifact-detail/']); 
  }

  deleteArtifact(row: any) {
    this.artifactService.deleteArtifact(row).subscribe(artifact => {
      this.deleteRowDataTable(row, this.dataSource, this.dataSource.paginator);
    });
  }

  private deleteRowDataTable(row, dataSource, paginator) {
    dataSource.data.splice(dataSource.data.indexOf(row), 1);
    dataSource.paginator = paginator;
  }
}