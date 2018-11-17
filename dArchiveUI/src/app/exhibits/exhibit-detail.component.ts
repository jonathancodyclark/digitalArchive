import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

import { ExhibitService, Exhibit } from '../services/exhibit.service'
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service'
import { AppUsersService } from '../services/appusers.service';

@Component({
  selector: 'exhibit-detail-page',
  templateUrl: './exhibit-detail.component.html',
  styleUrls: ['./exhibit-detail.component.css']
})
export class ExhibitDetailComponent implements OnInit {

    title = "NEW EXHIBIT"
    exhibit : Exhibit = {
        exhibitId : undefined,
        name : '',
        description : '',
    };
    editing;

    constructor(
        private exhibitService: ExhibitService,
        private router: Router,
        private loginService : LoginService,
        private cookieService : CookieService,
        private appusersService : AppUsersService,
    ) {}

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        //check that the user is logged in and direct them to do so if they are not.
        if(this.cookieService.get('token') == '') {
            this.router.navigate(['login/']); 
        }

        //verify that they are using their own password and not an auto-generated one
        //if they are using an auto-generated one have the user change it
        this.appusersService.getUser(this.cookieService.get('email')).subscribe(res => {
            var x = res["newuser"];
            console.log(res);
            if (x == 1) {
                this.appusersService.editedAppUser = res;
                this.router.navigate(['change/']);
            } else {
                //nothing
            }
            
        })

        //check whether the page has been loaded in an adding or editing capacity.
        this.editing = false;
        if(this.exhibitService.editedExhibit != undefined) {
            this.exhibit = this.exhibitService.editedExhibit;
            this.exhibitService.editedExhibit = undefined;
            this.title = "Edit " + this.exhibit.name;
            this.editing = true;
        }
    }

    //navigate back to exhibits list, for html use
    backToExhibits() {
        this.router.navigate(['/exhibits']); 
    }

    //depending on in what capacity the page has been loaded either save the edits to
    //the exhibit or save the new exhibit.
    saveExhibit() {
        console.log(this.exhibit);
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