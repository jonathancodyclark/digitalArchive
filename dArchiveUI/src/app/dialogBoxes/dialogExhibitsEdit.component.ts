import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialogRef, MatPaginator} from "@angular/material";
import { ExhibitService, Exhibit } from '../services/exhibit.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dialogExhibitsEdit',
  templateUrl: './dialogExhibitsEdit.component.html',
  styleUrls: ['./dialogExhibitsEdit.component.css'],
})
export class DialogExhibitsEditComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DialogExhibitsEditComponent>,
    private exhibitService: ExhibitService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
  
  }

  setSaveTrue() {
    this.exhibitService.setIsSave(true);
  }

  setSaveFalse() {
    this.exhibitService.setIsSave(false);
  }

  close() {
    this.dialogRef.close();
  }

}
