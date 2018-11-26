import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MatPaginator } from "@angular/material";
import { AppUsersService, AppUsers } from '../services/appusers.service';


@Component({
  selector: 'dialogUsersDeleteComponent',
  templateUrl: './dialogUsersDelete.component.html',
  styleUrls: ['./dialogUsersDelete.component.css'],
})
export class DialogUsersDeleteComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DialogUsersDeleteComponent>,
    private appUsersService: AppUsersService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    
  }

  setDeleteTrue() {
    this.appUsersService.setIsDelete(true);
  }

  setDeleteFalse() {
    this.appUsersService.setIsDelete(false);
  }

  close() {
    this.dialogRef.close();
  }

}
