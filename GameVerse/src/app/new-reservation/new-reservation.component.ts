import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../models/reservation.model';

@Component({
  selector: 'app-new-reservation',
  standalone: false,
  templateUrl: './new-reservation.component.html',
  styleUrl: './new-reservation.component.scss'
})
export class NewReservationComponent {
  formulaire!: FormGroup;
  currentReservation!: Reservation;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInt(): void {
    this.formulaire = this.formBuilder.group({
      id: [null],
      nom: [null],
      email: [null],
      tel: [null],
      idJeu: [null],
      plateforme: [null],
      dateReservation: [null],
      statut: [null]
    });

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentReservation = {
        id: 0,
        nom: formValue.nom || '',
        email: formValue.email || '',
        tel: formValue.tel || '',
        idJeu: formValue.idJeu || 0,
        plateforme: formValue.plateforme || '',
        dateReservation: formValue.dateReservation || '',
        statut: formValue.statut || ''
      };
    });
  };


}
