import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MatPaginator, MAT_DIALOG_DATA} from "@angular/material";
import { MatTableDataSource } from '@angular/material/table';
import { ArtifactService, Artifact } from '../services/artifact.service'

@Component({
  selector: 'dialogArtifactsDelete.component',
  templateUrl: './dialogArtifactsDelete.component.html',
  styleUrls: ['./dialogArtifactsDelete.component.css'],
})
export class DialogArtifactsDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogArtifactsDeleteComponent>,
    private artifactService : ArtifactService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

  }

  setDeleteTrue() {
    this.artifactService.setIsDelete(true);
  }

  setDeleteFalse() {
    this.artifactService.setIsDelete(false);
  }


  close() {
    this.dialogRef.close();
  }

}
