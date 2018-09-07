import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  getArtifacts() { 
    return new Observable<Artifact[]>();
  }

  addArtifact(artifact: Artifact) { 

  }
}