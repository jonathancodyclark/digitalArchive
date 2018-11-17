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
        //check if the user is logged in and navigate them to do so if they are not
        if(this.cookieService.get('token') == '') {
            this.router.navigate(['login/']); 
        }

        //verify that they are using their own password and not an auto-generated one
        //if they are using an auto-generated one have the user change it
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

          //record selected exhibit url for navigation later
          this.artifactService.selectedExhibit = this.router.url.replace('/artifacts/', '');

        //check whether page has been loaded in an add or edit capacity
        this.editing = false;
        if(this.artifactService.editedArtifact != undefined) {
            this.editing = true;
            this.artifact = this.artifactService.editedArtifact;
            this.artifactService.editedArtifact = undefined;
        }
    }

    //return to exhibits page, for html use.
    backToExhibits() {
        this.router.navigate(['/exhibits']);
    }

    //either save edited artifact changes or add new artifact to database depending on
    //in which capacity the page was loaded.
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

    //navigate to list of artifacts page.
    backToArtifacts() {
        this.router.navigate(['/artifacts/' + this.artifactService.selectedExhibit]); 
    }

    //record file information when an image is selected
    onFileSelected(event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    }

    //either replace current or add new image to the database linked to this artifact
    uploadImage() {
        if(this.selectedFile == null) {
            return;
        } else if (this.artifact.filepath == null) {
            this.imageService.addImage(this.artifact.artifactid, this.selectedFile).subscribe(res => {
                this.artifact.filepath = res['url'];
            });
            
        } else {
            this.imageService.editImage(this.artifact.artifactid, this.selectedFile).subscribe(res => {
                this.artifact.filepath = res['url'];
            });
        }
        //this.router.navigate(['/artifacts/' + this.artifact.exhibitId]);
    }

    //delete current image from database.
    deleteImage() {
        this.imageService.deleteImage(this.artifact.artifactid, this.artifact.filepath);
        this.artifact.filepath = null;
        //this.router.navigate(['/artifacts/' + this.artifact.exhibitId]);
    }
}