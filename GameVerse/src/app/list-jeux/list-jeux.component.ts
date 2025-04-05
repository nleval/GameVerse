import { Component, OnInit } from '@angular/core';
import { JeuxService } from '../service/jeux.service';
import { Jeux } from '../models/jeux.model'; 

@Component({
  selector: 'app-list-jeux',
  standalone: false,
  templateUrl: './list-jeux.component.html',
  styleUrl: './list-jeux.component.scss'
})
export class ListJeuxComponent {
  listJeux!: Jeux[];

  constructor(private myJeuxService: JeuxService) {}

  ngOnInit(): void {
    const state = history.state as { jeuxAffiche?: Jeux[] };

    if (state.jeuxAffiche && state.jeuxAffiche.length > 0) {
      this.listJeux = state.jeuxAffiche;
    } else {
      this.myJeuxService.getJeux().subscribe((jeux) => {
        this.listJeux = jeux;
      });
    }
  }
}
