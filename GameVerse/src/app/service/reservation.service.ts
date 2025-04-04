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
    return this.http.get<Reservation[]>('http://localhost:3001/Reservation');
  }

  getReservationById(id: number) : Observable<Reservation> 
  {
    return this.http.get<Reservation>('http://localhost:3001/Reservation/' + id);
  }  
}
