import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';

import { ArtifactService, Artifact } from '../services/artifact.service'

@Component({
  selector: 'artifacts-page',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edit', 'delete'];
  dataSource = new UserDataSource(this.artifactService);
  exhibit$: Observable<Artifact[]>;
  title = this.router.url.replace('/artifacts/', '');

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

  editArtifact(row: any) {
    this.artifactService.editedArtifact = row;
    this.router.navigate(['artifact-detail/']); 
  }

  addArtifact() {
    this.artifactService.selectedExhibit = this.router.url.replace('/artifacts/', '');
    this.router.navigate(['artifact-detail/']); 
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private artifactService: ArtifactService) {
    super();
  }
  connect(): Observable<Artifact[]> {
    return this.artifactService.getArtifacts();
  }
  disconnect() {}
}