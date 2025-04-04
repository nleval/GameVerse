import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-list-reservation',
  standalone: false,
  templateUrl: './list-reservation.component.html',
  styleUrl: './list-reservation.component.scss'
})
export class ListReservationComponent {
  listReservation!: Reservation[];

  constructor(private myReservationService: ReservationService) {}

  ngOnInit(): void {
    this.myReservationService.getReservation().subscribe({
      next: (reservation) => {
        // Log des jeux reçus dans la réponse
        this.listReservation = reservation;  // Affectation des jeux à la liste
      }
    });
  }

}
