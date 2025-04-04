import { Injectable } from '@angular/core';
import { Jeux } from '../models/jeux.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  constructor(private http: HttpClient) { }

  getJeux(): Observable<Jeux[]> 
  {
    return this.http.get<Jeux[]>('http://localhost:3001/Jeux');
  }

  getJeuxById(id: number) : Observable<Jeux> 
  {
    return this.http.get<Jeux>('http://localhost:3001/Jeux/' + id);
  }  
}
