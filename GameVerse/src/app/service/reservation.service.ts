import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getReservation(): Observable<Reservation[]> 
  {
    return this.http.get<Reservation[]>('http://localhost:3000/Reservation');
  }

  getReservationById(id: number) : Observable<Reservation> 
  {
    return this.http.get<Reservation>('http://localhost:3000/Reservation/' + id);
  }

  getNbReservation(): Observable<number>
  {
    return this.http.get<number>('http://localhost:3000/Reservation/count'); //marche pas
  }

  addReservation(reservation: Reservation): Observable<Reservation> 
  {
    return this.http.post<Reservation>('http://localhost:3000/Reservation', reservation);
  }
  updateReservation(reservation: Reservation): Observable<Reservation> 
  {
    return this.http.put<Reservation>('http://localhost:3000/Reservation/' + reservation.id, reservation);
  }
  deleteReservation(id: string): Observable<void> 
  {
    return this.http.delete<void>('http://localhost:3000/Reservation/' + id);
  }
}
