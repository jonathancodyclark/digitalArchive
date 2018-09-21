import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PageNotFoundComponent } from './not-found/not-found.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { ExhibitDetailComponent } from './exhibits/exhibit-detail.component';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { ArtifactDetailComponent } from './artifacts/artifact-detail.component';
import { LoginComponent } from './login/login.component'
 
const appRoutes: Routes = [
  { path: 'exhibits', component: ExhibitsComponent },
  { path: 'exhibit-detail', component: ExhibitDetailComponent },
  { path: 'artifacts/:id', component: ArtifactsComponent },
  { path: 'artifact-detail', component: ArtifactDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
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
