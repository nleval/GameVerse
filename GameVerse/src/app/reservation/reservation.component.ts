import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {
  @Input() Reservation!: Reservation;
  theReservation!: Reservation;
  idReservation!: string;

  constructor(private ReservationService: ReservationService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idReservation = this.route.snapshot.params['id'];
    if (this.idReservation !== undefined) 
    {
      this.ReservationService.getReservationById(+this.idReservation).subscribe(reservation => {this.theReservation = reservation});
    } 
    else 
    {
      this.theReservation = this.Reservation;
    }
  }
}
