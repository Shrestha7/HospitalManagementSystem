import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../Home/Home.HomepageComponent';
import { PatientComponent } from './Patient.PatientComponent';


const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'Home', component:HomePageComponent},
  {path:'Patient', component:PatientComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
