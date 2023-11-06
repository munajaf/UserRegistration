import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: any = {}; 
  showModal: boolean = false;

  onSubmit() {
    console.log('User submitted:', this.user);
    this.showModal = true;
  }
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  
}
