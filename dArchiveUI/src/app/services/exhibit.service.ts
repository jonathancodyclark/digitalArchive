import { Injectable } from '@angular/core';
import { Observable, EMPTY, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

export class Exhibit {
    name: string;
    exhibitId: number;
    description: string;

    constructor(
        name: string,
        exhibitId: number,
        description: string

    ) {}
}

@Injectable()
export class ExhibitService {

    editedExhibit = undefined;
    backendUrl = 'http://localhost:8080/exhibits';
    options = {headers: {'Content-Type':'application/json','Authorization': `${this.cookieService.get('token')}`}};
    isDelete = false;
    isSave = false;

    constructor(
        private http : HttpClient,
        private loginService: LoginService,
        private cookieService : CookieService,
        private router: Router,
    ){}

    getExhibits() : Observable<Exhibit[]> {
        return this.http.get<Exhibit[]>(this.backendUrl + '/all', this.options).pipe();
    }
    getExhibit(exhibitId: number) {
        return this.http.get<Exhibit>(this.backendUrl + '/' + exhibitId, this.options).pipe();
    }

    addExhibit(exhibit: Exhibit) { 
        return this.http.post(this.backendUrl + '/postExhibits', JSON.stringify(exhibit), this.options).pipe();
    }

    updateExhibit(exhibit: Exhibit) { 
        return this.http.put(this.backendUrl + '/update/' + exhibit.exhibitId, JSON.stringify(exhibit), this.options).pipe();
    }

    deleteExhibit(row: Exhibit) {
        return this.http.delete(this.backendUrl + '/delete/' + row.exhibitId, this.options).pipe();
    }

    setIsDelete(del : boolean) {
        this.isDelete = del;
    }
    
    setIsSave(sav : boolean) {
        this.isSave = sav;
    }
}