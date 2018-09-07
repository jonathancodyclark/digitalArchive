import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';

import { ExhibitService, Exhibit } from '../services/exhibit.service'

@Component({
  selector: 'exhibits-page',
  templateUrl: './exhibits.component.html',
  styleUrls: ['./exhibits.component.css']
})
export class ExhibitsComponent implements OnInit {
<<<<<<< HEAD

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edit', 'delete'];
  dataSource = new UserDataSource(this.exhibitService);
  exhibit$: Observable<Exhibit[]>;
  title = "Exhibits"

  constructor(
    private exhibitService: ExhibitService,
    private router: Router
  ) {}
=======
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edit', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
>>>>>>> 795f75ea85006ac76a878a2b9521136f0db4fcd6

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
   
  }

  openExhibit(row: any) {
    this.router.navigate(['artifacts/' + row.name]); 
  }

  addExhibit() {
    this.router.navigate(['exhibit-detail/']); 
  }

  editExhibit(row: any) {
    this.exhibitService.editedExhibit = row;
    this.router.navigate(['exhibit-detail/']); 
  }

  deleteExhibit(row: any) {
    this.router.navigate(['exhibit-detail/']); 
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private exhibitService: ExhibitService) {
    super();
  }
  connect(): Observable<Exhibit[]> {
    return this.exhibitService.getExhibits();
  }
  disconnect() {}
}