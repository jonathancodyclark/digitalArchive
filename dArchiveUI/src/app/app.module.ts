import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';


import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';



import { AppComponent } from './app.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { ExhibitDetailComponent } from './exhibits/exhibit-detail.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { HomePageComponent } from './homePage/homePage.component';
import { ArtifactDetailComponent } from './artifacts/artifact-detail.component';
import { LoginComponent } from './login/login.component';
import { ExhibitService } from "./services/exhibit.service";
import { ArtifactService } from "./services/artifact.service";
import { LoginService } from "./services/login.service";
import { AppUsersService } from './services/appusers.service';
import { AppUsersComponent } from './appusers/appUsers.component';
import { NewUserComponent } from './appusers/newUser.component';

@NgModule({
  declarations: [
    AppComponent,
    ExhibitsComponent,
    ArtifactsComponent,
    PageNotFoundComponent,
    ExhibitDetailComponent,
    ArtifactDetailComponent,
    LoginComponent,
    HomePageComponent,
    AppUsersComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    AppRoutingModule
  ],
  providers: [AppRoutingModule, ExhibitService, ArtifactService, LoginService, AppUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
