import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from '../Home/Home.HomepageComponent';
import { MasterPageComponent } from '../Home/Home.MasterPageComponent';

import { AppRoutingModule } from './Patient-routing.module';
import { PatientComponent } from './Patient.PatientComponent';


@NgModule({
  declarations: [
   PatientComponent,
   HomePageComponent,
   MasterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class PatientModule { }
