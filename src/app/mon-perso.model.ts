
export class MonPerso{
    photo:string;
    pseudo:string;
    idSecrete:string;
    race:string
    possedeSuperPouvoir:string;
    estMechant:boolean;
  
    constructor(pPhoto:string, ppseudo:string, pidSecrete:string, pRace:string, ppossedeSuperPouvoir:string, pestMechant:boolean){
      this.photo = pPhoto;
      this.pseudo = ppseudo;
      this.idSecrete = pidSecrete;
      this.race = pRace;
      this.possedeSuperPouvoir = ppossedeSuperPouvoir;
      this.estMechant = pestMechant;
    }
  }