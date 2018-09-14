import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

import { ExhibitService, Exhibit } from '../services/exhibit.service'

@Component({
  selector: 'exhibit-detail-page',
  templateUrl: './exhibit-detail.component.html',
  styleUrls: ['./exhibit-detail.component.css']
})
export class ExhibitDetailComponent implements OnInit {

    title = "New Exhibit"
    exhibit : Exhibit = {
    name: "",
    position: undefined,
    weight: undefined,
    symbol: ''
}

    constructor(
        private exhibitService: ExhibitService,
        private router: Router
    ) {}

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
    
    }

    backToExhibits() {
        this.router.navigate(['/exhibits']); 
    }

    saveExhibit() {
        this.exhibitService.addExhibit(this.exhibit);
        this.router.navigate(['/exhibits']); 
    }
}