import { MonPerso } from "./mon-perso.model";

export class Organisation {
    nom:string;
    nomQuartierGeneral:string;
    leader:MonPerso;
    membres:MonPerso[];

    constructor(pNom:string, pNomQuartierGeneral:string, pLeader:MonPerso){
        this.nom = pNom;
        this.nomQuartierGeneral = pNomQuartierGeneral;
        this.leader = pLeader;
        this.membres = [pLeader];
    }

    ajMembre(newMember:MonPerso){
        console.log('Ajout du personnage '+newMember.pseudo+' chez '+ this.nom);
        this.membres.push(newMember);
    }

    supprMembre(toDelMember:MonPerso){

    }
}
