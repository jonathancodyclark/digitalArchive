import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';

import { PageNotFoundComponent } from './not-found/not-found.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { ExhibitDetailComponent } from './exhibits/exhibit-detail.component';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { ArtifactDetailComponent } from './artifacts/artifact-detail.component';
import { AppUsersComponent} from './appusers/appUsers.component';
import { NewUserComponent } from './appusers/newUser.component';
 
const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'manageusers', component: AppUsersComponent },
  { path: 'exhibits', component: ExhibitsComponent },
  { path: 'exhibit-detail', component: ExhibitDetailComponent },
  { path: 'artifacts/:id', component: ArtifactsComponent },
  { path: 'artifact-detail', component: ArtifactDetailComponent },
  { path: 'newuser', component: NewUserComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
