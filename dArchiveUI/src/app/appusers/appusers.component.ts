import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { AppUsersService, AppUsers } from '../services/appusers.service';
import {MatTableDataSource} from '@angular/material/table';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service'

import { DialogUsersDeleteComponent } from '../dialogBoxes/dialogUsersDelete.component';

@Component({
  selector: 'appusers-page',
  templateUrl: './appusers.component.html',
  styleUrls: ['./appusers.component.css']
})
export class AppUsersComponent implements OnInit{
  title = 'MANAGE USERS';
  dataSource: MatTableDataSource<AppUsers>;
  displayedColumns: string[] = ['id', 'role', 'firstname', 'lastname', 'email', 'edit', 'delete'];

  constructor(
    private router: Router,
    private appusersservice: AppUsersService,
    private loginService : LoginService,
    private cookieService : CookieService,
    private appusersService : AppUsersService,
    private dialog : MatDialog
  ){}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngOnInit() {
    //check that user is logged and has proper permissions to view users
    console.log(this.cookieService.get('userrole'))
    if(this.cookieService.get('token') == '') {
      this.router.navigate(['login/']); 
    } else if (this.cookieService.get('userrole') == 'USER') {
      this.router.navigate(['exhibits/'])
    }

    //verify that they are using their own password and not an auto-generated one
    //if they are using an auto-generated one have the user change it
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

    //populate users list
    this.appusersservice.getUsers().subscribe(res => {
      this.dataSource = new MatTableDataSource<AppUsers>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.data.sort();
    });
  }

  //navigate to add/edit user screen, for html use
  addUser() {
    this.router.navigate(['newuser']);
  }

  //store info to populate user screen, navigate to add/edit user screen
  editUser(row: any) {
    this.appusersservice.editedAppUser = row;
    this.router.navigate(['newuser']); 
  }

  //delete selected user in backend, delete locally on page
  deleteUser(row: any) {
    const dialogRef = this.dialog.open(DialogUsersDeleteComponent);
    dialogRef.afterClosed().subscribe(() => {
      if (this.appusersService.isDelete == true) {
        this.appusersservice.deleteUser(row).subscribe(appUser => {
          this.deleteRowDataTable(row, this.dataSource, this.dataSource.paginator);
        });
      }
    });
    
  }

  //given a row, delete from the table (dataSource) and update the given paginator
  private deleteRowDataTable(row, dataSource, paginator) {
    dataSource.data.splice(dataSource.data.indexOf(row), 1);
    dataSource.paginator = paginator;
  }

  //navigate to exhibits, for html use
  toExhibits() {
    this.router.navigate(['exhibits/']); 
  }
  //navigate to profile, for html use
  toProfile() {
    this.router.navigate(['profile/']); 
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}