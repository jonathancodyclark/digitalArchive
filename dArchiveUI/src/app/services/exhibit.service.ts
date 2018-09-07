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
    backendUrl = 'http://localhost:8080/';

    constructor(
        private http : HttpClient
    ){}

    getExhibits() : Observable<Exhibit[]> { 
        return this.http.get(this.backendUrl + 'exhibits/all')
            .pipe(map(res => {
                console.log(res);
                return <Exhibit[]>res
        }));
    }

    addExhibit(exhibit: Exhibit) { 
        var headers : HttpHeaders = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        console.log(JSON.stringify(exhibit));
        console.log(headers);
        return this.http.post(this.backendUrl + 'exhibits/postExhibits', JSON.stringify(exhibit), {headers: headers})
        .pipe(map(res => 
            {
                console.log(res);
            }
        ));
    }

    updateExhibit(exhibit: Exhibit) { 
       this.http.post(this.backendUrl + 'exhibits/update/' + exhibit.exhibitId, JSON.stringify(exhibit));
    }

    deleteExhibit(row: Exhibit) {

    }
}