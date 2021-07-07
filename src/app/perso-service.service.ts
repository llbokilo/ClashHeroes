import { Injectable } from '@angular/core';
import { MonPerso } from './mon-perso.model';

@Injectable({
  providedIn: 'root'
})
export class PersoServiceService {
  private _listePersos:MonPerso[] = []
  constructor() {

  }
  recupererListePersos(){
    return this._listePersos;
  }
  ajouterPerso(pMonPerso:MonPerso){
    this._listePersos.push(pMonPerso);
  }
  supprPerso(pMonPerso:MonPerso){
    const indiceNomSupprPerso = this._listePersos.findIndex(perso => {return perso.pseudo == pMonPerso.pseudo})
    this._listePersos.slice(indiceNomSupprPerso ,indiceNomSupprPerso+1);
  }
}
