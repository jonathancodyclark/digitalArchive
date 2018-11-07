import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service'

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

    constructor(
        private http : HttpClient,
        private loginService: LoginService,
        private cookieService : CookieService
    ){}

    getExhibits() : Observable<Exhibit[]> {
        return this.http.get<Exhibit[]>(this.backendUrl + '/all', this.options);
    }

    addExhibit(exhibit: Exhibit) { 
        console.log(JSON.stringify(exhibit));
        return this.http.post(this.backendUrl + '/postExhibits', JSON.stringify(exhibit), this.options).pipe();
    }

    updateExhibit(exhibit: Exhibit) { 
        return this.http.put(this.backendUrl + '/update/' + exhibit.exhibitId, JSON.stringify(exhibit), this.options);
    }

    deleteExhibit(row: Exhibit) {
        return this.http.delete(this.backendUrl + '/delete/' + row.exhibitId, this.options).pipe();
    }
}