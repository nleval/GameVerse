import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Reservation } from '../models/reservation.model';
import { JeuxService } from '../service/jeux.service';
import { Jeux } from '../models/jeux.model';
import { ReservationService } from '../service/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-reservation',
  standalone: false,
  templateUrl: './new-reservation.component.html',
  styleUrl: './new-reservation.component.scss'
})
export class NewReservationComponent {
  formulaire!: FormGroup;
  currentReservation!: Reservation;
  mailRegex!: RegExp;
  telRegex!: RegExp;
  listJeux!: Jeux[];
  listReservation!: Reservation[];

  constructor(private formBuilder: FormBuilder, private myJeuxService: JeuxService, private myReservationService: ReservationService, private router: Router) {}

  dateBeforeOrTodayValidator(): Validators {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectedDate = new Date(control.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Réinitialise l'heure pour comparer uniquement la date (sans tenir compte de l'heure)
      selectedDate.setHours(0, 0, 0, 0);
  
      // Si la date sélectionnée est dans le futur, on renvoie une erreur
      return selectedDate > today ? { dateBeforeOrToday: true } : null;
    };
  }

  ngOnInit(): void {
    this.myJeuxService.getJeux().subscribe((jeux) => {this.listJeux = jeux});
    this.myReservationService.getReservation().subscribe((reservation) => {this.listReservation = reservation});

    this.mailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    this.telRegex = new RegExp("^0[1-9]([-. ]?[0-9]{2}){4}$")

    this.formulaire = this.formBuilder.group({
      id: this.listReservation.length + 1,
      nom: [null, [Validators.required, Validators.minLength(6)]],
      email: [null, [Validators.required, Validators.pattern(this.mailRegex)]],
      tel: [null, [Validators.required, Validators.pattern(this.telRegex)]],
      jeux: [null, [Validators.required]],
      plateforme: [null, [Validators.required]],
      dateReservation: [null, [Validators.required, this.dateBeforeOrTodayValidator()]],
      statut: [null, [Validators.required]]
    },
    {updateOn: 'blur'});

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentReservation = {
        id: (this.listReservation.length + 1).toString(),
        nom: formValue.nom || '',
        email: formValue.email || '',
        tel: formValue.tel || '',
        jeux: formValue.jeux || '',
        plateforme: formValue.plateforme || '',
        dateReservation: formValue.dateReservation || new Date(),
        statut: formValue.statut || ''
      },
      this.listJeux;
    });
  };

  onSubmit() {
    let NewReservation: Reservation = {
      id: this.currentReservation.id,
      nom: this.formulaire.get('nom')?.value,
      email: this.formulaire.get('email')?.value,
      tel: this.formulaire.get('tel')?.value,
      jeux: this.formulaire.get('jeux')?.value,
      plateforme: this.formulaire.get('plateforme')?.value,
      dateReservation: this.formulaire.get('dateReservation')?.value,
      statut: this.formulaire.get('statut')?.value
    }

    this.myReservationService.addReservation(NewReservation).subscribe({
      next: (reservation) => {
        this.router.navigateByUrl('/reservation')
      },
      error(err) {
        console.error('Erreur : ' + err);
        alert("Erreur lors de l'ajout de la reservation");
      },
    });
  }


}
