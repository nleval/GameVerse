import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { JeuxService } from '../service/jeux.service';
import { Jeux } from '../models/jeux.model'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtre-jeux',
  standalone: false,
  templateUrl: './filtre-jeux.component.html',
  styleUrl: './filtre-jeux.component.scss'
})
export class FiltreJeuxComponent {
  filtre?: string = undefined;

  listJeux!: Jeux[];
  listPlateformes!: string[];
  listGenres!: string[];
  listDeveloppeurs!: string[];
  formulaireClient!: FormGroup;

    constructor(private formBuilder: FormBuilder, private myJeuxService: JeuxService, private router: Router) {}

    ngOnInit(): void {
      this.myJeuxService.getJeux().subscribe((jeux) => {
        this.listJeux = jeux;
    
        // Une fois les jeux chargés, tu calcules les listes
        this.listPlateformes = [...new Set(this.listJeux.flatMap(jeu => jeu.plateforme))];
        this.listGenres = [...new Set(this.listJeux.flatMap(jeu => jeu.genre))];
        this.listDeveloppeurs = [...new Set(this.listJeux.map(jeu => jeu.developpeur))];
      });
    
      // Initialisation du formulaire
      this.formulaireClient = this.formBuilder.group({
        plateforme: [null],
        genre: [null],
        developpeur: [null],
      }, { updateOn: 'blur' });
    }
    

    onSubmitClient() {
      const plateforme = this.formulaireClient.get('plateforme')?.value;
      const genre = this.formulaireClient.get('genre')?.value;
      const developpeur = this.formulaireClient.get('developpeur')?.value;
      const jeuxAffiche = this.listJeux.filter(jeu => 
        (!plateforme || plateforme.length === 0 || jeu.plateforme.includes(plateforme)) &&
        (!genre || genre.length === 0 || jeu.genre.includes(genre)) &&
        (!developpeur || developpeur.length === 0 || jeu.developpeur === developpeur)
      );
  
      this.router.navigate(['/jeux'], { state: { jeuxAffiche } });
    }

    onReservationClick() {
      this.router.navigate(['filtre/reservation']);
    }
}
