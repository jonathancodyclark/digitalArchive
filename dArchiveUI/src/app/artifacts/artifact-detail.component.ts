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

    title = "New Artifact"
    artifact : Artifact = {
    name: "",
    position: undefined,
    weight: undefined,
    symbol: ''
    }

    constructor(
        private artifactService: ArtifactService,
        private router: Router
    ) {}

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
    
    }

    backToExhibits() {
        this.router.navigate(['/exhibits']); 
    }

    saveArtifact() {
        this.artifactService.addArtifact(this.artifact);
        this.router.navigate(['/artifacts/' + this.artifactService.selectedExhibit]); 
    }
}