import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

import { ArtifactService, Artifact } from '../services/artifact.service'
import { LoginService } from '../services/login.service';
import {ImageService} from '../services/image.service';
import { CookieService } from 'ngx-cookie-service'
import { AppUsersService } from '../services/appusers.service';

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
        private loginService : LoginService,
        private imageService :ImageService,
        private cookieService : CookieService,
        private appusersService : AppUsersService,
    ) {}

    @ViewChild(MatPaginator) paginator: MatPaginator;

    selectedFile = null;

    ngOnInit() {
        if(this.cookieService.get('token') == '') {
            this.router.navigate(['login/']); 
        }

        this.appusersService.getUser(this.cookieService.get('email')).subscribe(res => {
            var x = res["newuser"];
            console.log(res);
            if (x == 1) {
                this.appusersService.editedAppUser = res;
                this.router.navigate(['change/']);
            } else {
                //nothing
            }
            
          })

          this.artifactService.selectedExhibit = this.router.url.replace('/artifacts/', '');

        this.editing = false;
        if(this.artifactService.editedArtifact != undefined) {
            this.editing = true;
            this.artifact = this.artifactService.editedArtifact;
            this.artifactService.editedArtifact = undefined;
            this.title = "Edit " + this.artifact.name;
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

    onFileSelected(event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    }

    uploadImage() {
        if(this.selectedFile == null) {
            return;
        } else if (this.artifact.filepath == null) {
            this.imageService.addImage(this.artifact.artifactid, this.selectedFile);
        } else {
            this.imageService.editImage(this.artifact.artifactid, this.selectedFile);
        }
        this.router.navigate(['/artifacts/' + this.artifact.exhibitId]);
    }

    deleteImage() {
        this.imageService.deleteImage(this.artifact.artifactid, this.artifact.filepath);
        this.router.navigate(['/artifacts/' + this.artifact.exhibitId]);
    }
}