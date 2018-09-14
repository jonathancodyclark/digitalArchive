import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

import { ArtifactService, Artifact } from '../services/artifact.service'

@Component({
  selector: 'artifact-detail-page',
  templateUrl: './artifact-detail.component.html',
  styleUrls: ['./artifact-detail.component.css']
})
export class ArtifactDetailComponent implements OnInit {

    
    editing;
    title = "New Artifact"
    artifact : Artifact = {
    artifactid : undefined,
    name : '',
    exhibitId : this.artifactService.selectedExhibit,
    description: '',
    onDisplay: undefined
    }

    constructor(
        private artifactService: ArtifactService,
        private router: Router
    ) {}

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        this.editing = false;
        console.log(this.artifactService.selectedExhibit)
        if(this.artifactService.editedArtifact != undefined) {
            this.editing = true;
            this.artifact = this.artifactService.editedArtifact;
            this.artifactService.editedArtifact = undefined;
        }
    }

    backToExhibits() {
        this.router.navigate(['/exhibits']);
    }

    saveArtifact() {
        if(this.editing) {
            this.artifactService.updateArtifact(this.artifact).subscribe(exhibit => {
                this.router.navigate(['/artifacts/' + this.artifact.exhibitId]);
            });
        } else {
            this.artifactService.addArtifact(this.artifact).subscribe(artifact => {
                this.router.navigate(['/artifacts/' + this.artifact.exhibitId]);
            });
        }
    }

    backToArtifacts() {
        this.router.navigate(['/artifacts/' + this.artifactService.selectedExhibit]); 
    }
}