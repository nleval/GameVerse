import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtre',
  standalone: false,
  templateUrl: './filtre.component.html',
  styleUrl: './filtre.component.scss'
})
export class FiltreComponent {
  constructor(private router: Router) {}

  onJeuxClick() {
    this.router.navigate(['filtre/jeux']);
  }

  onReservationClick() {
    this.router.navigate(['filtre/reservation']);
  }
}
