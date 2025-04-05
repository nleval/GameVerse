import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private myReservationService: ReservationService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.idReservation = this.route.snapshot.params['id'];
    if (this.idReservation !== undefined) 
    {
      this.myReservationService.getReservationById(+this.idReservation).subscribe(reservation => {this.theReservation = reservation});
    } 
    else 
    {
      this.theReservation = this.Reservation;
    }
  }

  supprimer(): void {
    if (this.theReservation && this.theReservation.id) {
      this.myReservationService.deleteReservation(this.theReservation.id).subscribe(() => {
        console.log('Reservation supprimée avec succès');
        this.router.navigateByUrl('/reservation')
      });
    } else {
      console.error('Aucune réservation à supprimer');
      this.router.navigateByUrl('/reservation')
    }
  }
}
