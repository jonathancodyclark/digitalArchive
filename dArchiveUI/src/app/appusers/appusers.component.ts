import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator } from '@angular/material';
import { AppUsersService, AppUsers } from '../services/appusers.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'appusers-page',
  templateUrl: './appusers.component.html',
  styleUrls: ['./appusers.component.css']
})
export class AppUsersComponent implements OnInit{
  title = 'Manage Users Page';
  dataSource: MatTableDataSource<AppUsers>;
  displayedColumns: string[] = ['id', 'role', 'first name', 'last name', 'email', 'edit', 'delete'];

  constructor(
    private router: Router,
    private appusersservice: AppUsersService
  ){}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngOnInit() {
    this.appusersservice.getUsers().subscribe(res => {
      this.dataSource = new MatTableDataSource<AppUsers>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.data.sort();
    });
  }

  addUser() {
    this.router.navigate(['newuser']);
  }

  editUser(row: any) {
    this.appusersservice.editedAppUser = row;
    this.router.navigate(['newuser']); 
  }

  deleteUser(row: any) {
    this.appusersservice.deleteUser(row).subscribe(appUser => {
      this.deleteRowDataTable(row, this.dataSource, this.dataSource.paginator);
    });
  }

  private deleteRowDataTable(row, dataSource, paginator) {
    dataSource.data.splice(dataSource.data.indexOf(row), 1);
    dataSource.paginator = paginator;
  }

}