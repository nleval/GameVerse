export class Reservation{
    id: number;
    nom: string;
    email: string;
    tel: string;
    idJeu: number;
    plateforme: string;
    dateReservation: string;
    statut: string;

    constructor(id: number, nom: string, email: string, tel: string, idJeu: number,  plateforme: string,  dateReservation: string, statut: string)
    {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.tel = tel;
        this.idJeu = idJeu;
        this.plateforme = plateforme;
        this.dateReservation = dateReservation;
        this.statut = statut;
    }
}