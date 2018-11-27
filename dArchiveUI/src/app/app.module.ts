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
import { ImageService } from './services/image.service';
import { AppUsersComponent } from './appusers/appusers.component';
import { NewUserComponent } from './appusers/newUser.component';
import { ForgotPassComponent } from './forgotPass/forgotPass.component';
import { ChangePassComponent } from './changePass/changePass.component';
import { CookieService } from 'ngx-cookie-service';
import {MatDialogModule} from "@angular/material";
import { ProfilePageComponent } from './profilePage/profilePage.component';

import { DialogExhibitsDeleteComponent } from './dialogBoxes/dialogExhibitsDelete.component';
import { DialogExhibitsEditComponent } from './dialogBoxes/dialogExhibitsEdit.component';
import { DialogArtifactsDeleteComponent } from './dialogBoxes/dialogArtifactsDelete.component';
import { DialogArtifactsEditComponent } from './dialogBoxes/dialogArtifactsEdit.component';
import { DialogUsersDeleteComponent } from './dialogBoxes/dialogUsersDelete.component';
import { DialogUsersEditComponent } from './dialogBoxes/dialogUsersEdit.component';
import { DialogProfileEditComponent } from './dialogBoxes/dialogProfileEdit.component';


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
    ForgotPassComponent,
    ChangePassComponent,
    NewUserComponent,
    DialogExhibitsDeleteComponent,
    DialogExhibitsEditComponent,
    DialogArtifactsDeleteComponent,
    DialogArtifactsEditComponent,
    DialogUsersDeleteComponent,
    DialogUsersEditComponent,
    ProfilePageComponent,
    DialogProfileEditComponent,
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
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [AppRoutingModule, ExhibitService, ArtifactService, LoginService, AppUsersService, ImageService, CookieService,
              DialogExhibitsDeleteComponent, DialogExhibitsEditComponent, DialogArtifactsEditComponent, DialogUsersEditComponent,
              DialogProfileEditComponent],
  bootstrap: [AppComponent],
  entryComponents: [DialogExhibitsDeleteComponent, DialogExhibitsEditComponent, DialogArtifactsDeleteComponent, 
                    DialogArtifactsEditComponent, DialogUsersDeleteComponent, DialogUsersEditComponent, DialogProfileEditComponent]
})
export class AppModule { }
