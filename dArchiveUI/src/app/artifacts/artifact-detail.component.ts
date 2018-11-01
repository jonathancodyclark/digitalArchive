import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

import { ArtifactService, Artifact } from '../services/artifact.service'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'artifact-detail-page',
  templateUrl: './artifact-detail.component.html',
  styleUrls: ['./artifact-detail.component.css']
})
export class ArtifactDetailComponent implements OnInit {

    
    editing;
    title = "NEW ARTIFACT"
    artifact : Artifact = {
    artifactid : undefined,
    name : '',
    exhibitId : this.artifactService.selectedExhibit,
    description: '',
    onDisplay: undefined,
    filepath: '',
    }

    constructor(
        private artifactService: ArtifactService,
        private router: Router,
        private loginService : LoginService
    ) {}

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        if(this.loginService.loggedInAs == null) {
            this.router.navigate(['login/']); 
        }

        this.editing = false;
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