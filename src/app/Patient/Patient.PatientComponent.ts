import { Component } from '@angular/core';
import { Patient } from './Patient.PatientModel';
@Component({

  templateUrl: './Patient.Patient.html',
  styleUrls: ['./Patient.Styles.css']
})
export class PatientComponent {
  patientObj:Patient = new Patient();
  patientObjs:Array<Patient>=new Array<Patient>();
  title = 'HospitalManagementSystem';

  AddPatient(){
    // take current object and add to patientObjs collection
    this.patientObjs.push(this.patientObj);
    this.patientObj = new Patient(); // create new object of patient
  }
}
