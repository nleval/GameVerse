import { Component, Input, OnInit } from '@angular/core';
import { Jeux } from '../models/jeux.model';
import { ActivatedRoute } from '@angular/router';
import { JeuxService } from '../service/jeux.service';

@Component({
  selector: 'app-jeux',
  standalone: false,
  templateUrl: './jeux.component.html',
  styleUrl: './jeux.component.scss'
})
export class JeuxComponent {
  @Input() Jeux!: Jeux;
  theJeux!: Jeux;
  idJeux!: string;

  constructor(private JeuxService: JeuxService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idJeux = this.route.snapshot.params['id'];
    if (this.idJeux !== undefined) 
    {
      this.JeuxService.getJeuxById(+this.idJeux).subscribe(Jeux => {this.theJeux = Jeux});
    } 
    else 
    {
      this.theJeux = this.Jeux;
    }
  }
}
