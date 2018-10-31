import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

export class Artifact {
  artifactid : number;
  name : string;
  exhibitId : number;
  description: string;
  onDisplay: number; 
  filepath: string;

  constructor (
    artifactid : number,
    name : string,
    exhibitId : number,
    description: string,
    onDisplay: number
  ){}
} 

@Injectable()
export class ArtifactService {

  selectedExhibit;
  editedArtifact;
  backendUrl = 'http://localhost:8080/artifacts';
  headers = new HttpHeaders({'Content-Type':'application/json'});
  options = {headers: this.headers};

  constructor(
    private http : HttpClient,
    private router: Router
  ){}

  getArtifacts() { 
    let id = this.router.url.replace('/artifacts/', '');
    return this.http.get<Artifact[]>(this.backendUrl + '/exhibits/' + id, this.options);
  }

  addArtifact(artifact: Artifact) { 
    return this.http.post(this.backendUrl + '/postArtifacts', JSON.stringify(artifact), this.options).pipe();
  }

  updateArtifact(artifact : Artifact) {
    return this.http.put(this.backendUrl + '/update/' + artifact.artifactid, JSON.stringify(artifact), this.options).pipe();
  }

  deleteArtifact(row : Artifact) {
    return this.http.delete(this.backendUrl + '/delete/' + row.artifactid, this.options).pipe();
  }
}