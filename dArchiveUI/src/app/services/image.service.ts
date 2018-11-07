import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'

@Injectable()
export class ImageService {

    credentials = {username : '', password : ''};

    loggedInAs = null;

    editedExhibit = undefined;
    backendUrl = 'http://localhost:8080/storage';
    headers = new HttpHeaders({'Content-Type':'application/json','Authorization': `${this.cookieService.get('token')}`});
    options = {headers: this.headers};

    constructor(
        private http : HttpClient,
        private router : Router,
        private cookieService : CookieService
    ){}

    addImage(artifactId: number, selectedFile : File) { 

        const fd = new FormData();
        fd.append('file', selectedFile, selectedFile.name)
        console.log(fd);
        return this.http.post(this.backendUrl + `/${artifactId}/uploadFile`, fd).subscribe(res => {
            console.log(res);
        })
    }

    editImage(artifactId: number, selectedFile : File) {
        const fd = new FormData();
        fd.append('file', selectedFile, selectedFile.name)
        console.log(fd);
        return this.http.post(this.backendUrl + `/${artifactId}/editFile`, fd).subscribe(res => {
            console.log(res);
        })
    }

    deleteImage(artifactId: number, filePath : string) { 
        var fd = new FormData();
        fd.append('file', null, '')
        console.log(fd);
        return this.http.post(this.backendUrl + `/${artifactId}/editFile`, fd).subscribe(res => {
            console.log(res);
        })
    }

}