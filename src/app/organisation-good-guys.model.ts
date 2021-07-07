import { MonPerso } from "./mon-perso.model";
import { Organisation } from "./organisation.model";
import { PrecepteMoral } from "./precepte-moral.model";

export class OrganisationGoodGuys extends Organisation{
    preceptes:PrecepteMoral[];

    constructor(pNom:string, pNomQuartierGeneral:string, pLeader:MonPerso){
        super(pNom, pNomQuartierGeneral, pLeader);
        this.preceptes = [];
    }
}