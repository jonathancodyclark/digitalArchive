import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MatPaginator, MAT_DIALOG_DATA} from "@angular/material";
import { ExhibitService, Exhibit } from '../services/exhibit.service';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialogExhibitsDelete.component.html',
  styleUrls: ['./dialogExhibitsDelete.component.css'],
})
export class DialogExhibitsDeleteComponent implements OnInit {

  dataSource: MatTableDataSource<Exhibit>;

  constructor(
    public dialogRef: MatDialogRef<DialogExhibitsDeleteComponent>,
    private exhibitService: ExhibitService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

  }

  setDeleteTrue() {
    this.exhibitService.setIsDelete(true);
  }

  setDeleteFalse() {
    this.exhibitService.setIsDelete(false);
  }

  close() {
    this.dialogRef.close();
  }

}



