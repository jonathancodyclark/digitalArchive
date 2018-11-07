import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

import { ExhibitService, Exhibit } from '../services/exhibit.service'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'exhibit-detail-page',
  templateUrl: './exhibit-detail.component.html',
  styleUrls: ['./exhibit-detail.component.css']
})
export class ExhibitDetailComponent implements OnInit {

    title = "NEW EXHIBIT"
    exhibit : Exhibit = {
        
        exhibitId: undefined,
        name: '',
        description: ''
    }
    editing;

    constructor(
        private exhibitService: ExhibitService,
        private router: Router,
        private loginService : LoginService
    ) {}

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        if(this.loginService.token == null) {
            this.router.navigate(['login/']); 
        }

        this.editing = false;
        if(this.exhibitService.editedExhibit != undefined) {
            this.exhibit = this.exhibitService.editedExhibit;
            this.exhibitService.editedExhibit = undefined;
            this.title = "Edit " + this.exhibit.name;
            this.editing = true;
        }
    }

    backToExhibits() {
        this.router.navigate(['/exhibits']); 
    }

    saveExhibit() {
        if(this.editing) {
            this.exhibitService.updateExhibit(this.exhibit).subscribe(exhibit => {
                this.router.navigate(['/exhibits']);
            });
        } else {
            this.exhibitService.addExhibit(this.exhibit).subscribe(exhibit => {
                this.router.navigate(['/exhibits']);
            });
        }
    }
}