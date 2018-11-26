import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialogRef, MatPaginator} from "@angular/material";
import { LoginService } from '../services/login.service';
import { ArtifactService, Artifact } from '../services/artifact.service';

@Component({
  selector: 'dialogArtifactsEdit.component',
  templateUrl: './dialogArtifactsEdit.component.html',
  styleUrls: ['./dialogArtifactsEdit.component.css'],
})
export class DialogArtifactsEditComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DialogArtifactsEditComponent>,
    private artifactService: ArtifactService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

  }

  setSaveTrue() {
    this.artifactService.setIsSave(true);
  }

  setSaveFalse() {
    this.artifactService.setIsSave(false);
  }


  close() {
    this.dialogRef.close();
  }

}