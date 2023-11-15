import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() userData: any;
  @Input() showModal: boolean = false;
  constructor(private router: Router) {
  }
  closeModal() {
    this.showModal = false;
    this.router.navigate(['/welcome']);
    
  }

  
}
