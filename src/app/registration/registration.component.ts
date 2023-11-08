import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user: any = {};
  showModal: boolean = false;
  registrationForm: FormGroup; 

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
     
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
   
      this.showModal = true;
    }
  
  }
 

 
}
