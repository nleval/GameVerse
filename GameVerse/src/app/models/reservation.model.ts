export class Reservation{
    id: string;
    nom: string;
    email: string;
    tel: string;
    jeux: string;
    plateforme: string;
    dateReservation: string;
    statut: string;

    constructor(id: string, nom: string, email: string, tel: string, jeux: string,  plateforme: string,  dateReservation: string, statut: string)
    {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.tel = tel;
        this.jeux = jeux;
        this.plateforme = plateforme;
        this.dateReservation = dateReservation;
        this.statut = statut;
    }
}