import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Exhibit {
    name: string;
    exhibitId: number;
    description: string;

    constructor(
        name: string,
        exhibitId: number,
        description: string,
    ) {}
}

@Injectable()
export class ExhibitService {

    editedExhibit = undefined;
    backendUrl = 'http://localhost:8080/exhibits';
    headers = new HttpHeaders({'Content-Type':'application/json'});
    options = {headers: this.headers};

    constructor(
        private http : HttpClient
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