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
      const state = history.state as { reservationAffiche?: Reservation[] };
  
      if (state.reservationAffiche && state.reservationAffiche.length > 0) {
        this.listReservation = state.reservationAffiche;
      } else {
        this.myReservationService.getReservation().subscribe((reservation) => {
          this.listReservation = reservation;
        });
      }
  }

}
