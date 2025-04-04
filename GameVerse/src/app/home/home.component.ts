import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}
  
  goToJeux() {
    this.router.navigateByUrl('/jeux');
  }

  goToReservation() {
    this.router.navigateByUrl('/reservation');
  }
}
