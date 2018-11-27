import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MatPaginator, MAT_DIALOG_DATA} from "@angular/material";
import { LoginService } from '../services/login.service';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialogProfileEdit.component.html',
  styleUrls: ['./dialogProfileEdit.component.css'],
})
export class DialogProfileEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogProfileEditComponent>,
    private loginService: LoginService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

  }

  setSaveTrue() {
    this.loginService.setIsSave(true);
  }

  setSaveFalse() {
    this.loginService.setIsSave(false);
  }

  close() {
    this.dialogRef.close();
  }

}
