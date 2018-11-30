import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import { catchError } from 'rxjs/operators';
import { EMPTY, throwError } from 'rxjs';

@Injectable()
export class ImageService {

    credentials = {username : '', password : ''};

    loggedInAs = null;

    editedExhibit = undefined;
    backendUrl = 'http://localhost:8080/storage';
    headers = new HttpHeaders({'Authorization': `${this.cookieService.get('token')}`});
    options = {headers: this.headers};
    imageurl = null;

    constructor(
        private http : HttpClient,
        private router : Router,
        private cookieService : CookieService
    ){}

    addImage(artifactId: number, selectedFile : File) { 

        var fd = new FormData();
        fd.append('File', selectedFile, selectedFile.name)
        return this.http.post(this.backendUrl + `/${artifactId}/uploadFile`, fd, this.options).pipe();
    }

    editImage(artifactId: number, selectedFile : File) {
        const fd = new FormData();
        fd.append('File', selectedFile, selectedFile.name)
        return this.http.post(this.backendUrl + `/${artifactId}/editFile`, fd, this.options).pipe();
    }

    deleteImage(artifactId: number, filePath : string) { 
        return this.http.delete(this.backendUrl + `/${artifactId}/deleteFile`, this.options).subscribe(res => {
            console.log(res);
        })
    }

}