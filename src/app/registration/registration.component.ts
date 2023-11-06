import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: any = {}; // Initialize an empty user object
  showModal: boolean = false;

  onSubmit() {
    // Handle form submission here (e.g., send data to a server)
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
