export class Jeux {
    id: number;
    titre: string;
    plateforme: string[];
    genre: string[];
    developpeur: string;
    dateDeSortie: string;
    stockDisponible: number;
  
    constructor(id: number, titre: string, plateforme: string[], genre: string[], developpeur: string, dateDeSortie: string, stockDisponible: number) 
    {
      this.id = id;
      this.titre = titre;
      this.plateforme = plateforme;
      this.genre = genre;
      this.developpeur = developpeur;
      this.dateDeSortie = dateDeSortie;
      this.stockDisponible = stockDisponible;
    }
  }
  