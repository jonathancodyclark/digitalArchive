import { Injectable } from '@angular/core';
import { of, Observable, EMPTY, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service'
import { catchError } from 'rxjs/operators';

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
    onDisplay: number,
    filepath: string
  ){}
} 

@Injectable()
export class ArtifactService {

  selectedExhibit;
  editedArtifact;
  backendUrl = 'http://localhost:8080/artifacts';
  options = {headers: {'Content-Type':'application/json','Authorization': `${this.cookieService.get('token')}`}};
  isDelete = false;
  isSave = false;

  constructor(
    private http : HttpClient,
    private router: Router,
    private loginService: LoginService,
    private cookieService : CookieService
  ){}

  //retrieves list of artifacts from the database.
  getArtifacts() { 
    let id = this.router.url.replace('/artifacts/', '');
    return this.http.get<Artifact[]>(this.backendUrl + '/exhibits/' + id, this.options).pipe(catchError( err => {
      var info = err['error']
      if (info['exception'].includes('ExpiredJwtException')) {
          this.cookieService.delete('token')
          this.cookieService.delete('userrole')
          this.cookieService.delete('email')
          this.router.navigateByUrl('/login');
          return EMPTY;
      } else {
          return throwError(err);
      }
 }));
  }

  //addes a particuar artifact to the database. 
  addArtifact(artifact: Artifact) { 
    return this.http.post(this.backendUrl + '/postArtifacts', JSON.stringify(artifact), this.options).pipe(catchError( err => {
      var info = err['error']
      if (info['exception'].includes('ExpiredJwtException')) {
          this.cookieService.delete('token')
          this.cookieService.delete('userrole')
          this.cookieService.delete('email')
          this.router.navigateByUrl('/login');
          return EMPTY;
      } else {
          return throwError(err);
      }
 }));
  }

  //updates a particular artifact in the database with whatever changes were made. 
  updateArtifact(artifact : Artifact) {
    return this.http.put(this.backendUrl + '/update/' + artifact.artifactid, JSON.stringify(artifact), this.options).pipe(catchError( err => {
      var info = err['error']
      if (info['exception'].includes('ExpiredJwtException')) {
          this.cookieService.delete('token')
          this.cookieService.delete('userrole')
          this.cookieService.delete('email')
          this.router.navigateByUrl('/login');
          return EMPTY;
      } else {
          return throwError(err);
      }
 }));
  }

  //deletes a particular artifact from the database.
  deleteArtifact(row : Artifact) {
    return this.http.delete(this.backendUrl + '/delete/' + row.artifactid, this.options).pipe(catchError( err => {
      var info = err['error']
      if (info['exception'].includes('ExpiredJwtException')) {
          this.cookieService.delete('token')
          this.cookieService.delete('userrole')
          this.cookieService.delete('email')
          this.router.navigateByUrl('/login');
          return EMPTY;
      } else {
          return throwError(err);
      }
 }));
  }

  setIsDelete(del : boolean) {
    this.isDelete = del;
  }

  setIsSave(sav : boolean) {
    this.isSave = sav;
  }
}