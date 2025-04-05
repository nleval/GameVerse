import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListJeuxComponent } from './list-jeux/list-jeux.component';
import { JeuxComponent } from './jeux/jeux.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { FiltreComponent } from './filtre/filtre.component';
import { FiltreJeuxComponent } from './filtre-jeux/filtre-jeux.component';
import { FiltreReservationComponent } from './filtre-reservation/filtre-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jeux',
    component: ListJeuxComponent
  },
  { 
    path : 'jeux/:id',
    component: JeuxComponent
  },
  {
    path : 'reservation',
    component: ListReservationComponent
  },
  {
    path : 'reservation/:id',
    component: ReservationComponent
  },
  {
    path : 'new',
    component: NewReservationComponent
  },
  {
    path : 'filtre',
    component: FiltreComponent
  },
  {
    path : 'filtre/jeux',
    component: FiltreJeuxComponent
  },
  {
    path : 'filtre/reservation',
    component: FiltreReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
