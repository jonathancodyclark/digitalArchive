import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Artifact {
  artifactid : number;
  name : string;
  exhibitId : number;
  description: string;
  onDisplay: number; 

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
  backendUrl = 'http://localhost:8080/';

  constructor(
    private http : HttpClient
  ){}

  getArtifacts() { 
    return this.http.get(this.backendUrl + 'artifacts/exhibits/' + this.selectedExhibit)
        .pipe(map(res => {
            console.log(res);
            return <Artifact[]>res
    }));
  }

  addArtifact(artifact: Artifact) { 

  }
}