import { Injectable } from '@angular/core';
import { of } from 'rxjs';
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

  getArtifacts() { return of(this.ELEMENT_DATA); }

  addArtifact(artifact: Artifact) { 
    if(artifact.position == undefined) {
      artifact.position = this.ELEMENT_DATA.length + 1;
      this.ELEMENT_DATA.push(artifact);
    }
  }

  getArtifact(name: string) {
    return this.getArtifacts().pipe(
      map(artifacts => artifacts.find(artifact => artifact.name === name))
    );
  }
}