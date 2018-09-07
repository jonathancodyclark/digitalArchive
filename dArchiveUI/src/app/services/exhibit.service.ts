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
                return res["data"].map(item => { 
                    return new Exhibit( 
                        item.exhibitId,
                        item.name,
                        item.description,
                    );
                  });
            }));
    }

    addExhibit(exhibit: Exhibit) { 
        if(exhibit == undefined) {
            exhibit.position = this.ELEMENT_DATA.length + 1;
            this.ELEMENT_DATA.push(exhibit)
        }//shorthand for 'not in the list already'
    }

    deleteExhibit(row: Exhibit) {

    }
}