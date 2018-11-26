import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialogRef, MatPaginator} from "@angular/material";
import { AppUsersService, AppUsers } from '../services/appusers.service';

@Component({
  selector: 'dialogUsersEditComponent',
  templateUrl: './dialogUsersEdit.component.html',
  styleUrls: ['./dialogUsersEdit.component.css'],
})
export class DialogUsersEditComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DialogUsersEditComponent>,
    private appUsersService: AppUsersService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

  }

  setSaveTrue() {
    this.appUsersService.setIsSave(true);
  }

  setSaveFalse() {
    this.appUsersService.setIsSave(false);
  }


  close() {
    this.dialogRef.close();
  }

}