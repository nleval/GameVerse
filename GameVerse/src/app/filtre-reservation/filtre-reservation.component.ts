import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from '../service/reservation.service';
import { Reservation } from '../models/reservation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtre-reservation',
  standalone: false,
  templateUrl: './filtre-reservation.component.html',
  styleUrl: './filtre-reservation.component.scss'
})
export class FiltreReservationComponent implements OnInit {
  filtre?: string = undefined;
  
  listReservation!: Reservation[];
  listPlateforme!: string[];
  listJeu!: string[];
  formulaireReservation!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private myReservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myReservationService.getReservation().subscribe({
      next: (reservation) => {
        this.listReservation = reservation;

        // ⚠️ Ces deux lignes doivent être DANS le subscribe !
        this.listPlateforme = [...new Set(this.listReservation.flatMap(res => res.plateforme))];
        this.listJeu = [...new Set(this.listReservation.flatMap(res => res.jeux))];
      }
    });

    this.formulaireReservation = this.formBuilder.group({
      plateforme: [null],
      jeux: [null],
    }, { updateOn: 'blur' });
  }

  onSubmitReservation() {
    const plateforme = this.formulaireReservation.get('plateforme')?.value;
    const jeux = this.formulaireReservation.get('jeux')?.value;

    const reservationAffiche = this.listReservation.filter(res =>
      (!plateforme || plateforme.length === 0 || res.plateforme.includes(plateforme)) &&
      (!jeux || jeux.length === 0 || res.jeux.includes(jeux))
    );

    this.router.navigate(['/reservation'], { state: { reservationAffiche } });
  }

  onJeuxClick() {
    this.router.navigate(['filtre/jeux']);
  }
}
