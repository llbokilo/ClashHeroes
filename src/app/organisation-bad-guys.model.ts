import { MonPerso } from "./mon-perso.model";
import { Crime } from "./crime.model";
import { Organisation } from "./organisation.model";

export class OrganisationBadGuys extends Organisation{
    actes:Crime[];

    constructor(pNom:string, pNomQuartierGeneral:string, pLeader:MonPerso){
        super(pNom, pNomQuartierGeneral, pLeader);
        this.actes = [];
    }
}
