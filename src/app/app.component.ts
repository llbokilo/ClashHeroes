import { Component } from '@angular/core';
import { MonPerso } from './mon-perso.model';
import { PersoServiceService } from './perso-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ClashHeroes';
/*   monPerso1 = new MonPerso("/assets/Pics/bat.png", "Batman", "Bruce Wayne", "Humain", "Non", false);
  monPerso2 = new MonPerso("/assets/Pics/jok.jpg", "Joker", "Inconnue", "Humain", "Non", true);
  monPerso3 = new MonPerso("/assets/Pics/wolvy.jpg", "Wolverine", "Logan", "Mutant", "Oui", false);
  monPerso4 = new MonPerso("/assets/Pics/cap.jpg", "Capitaine Flam", "Inconnue", "Humain", "Non", false);
  monPerso5 = new MonPerso("/assets/Pics/loki.jpg", "Loki", "Inconnue", "Dieu", "Oui", true);
  monPerso6 = new MonPerso("/assets/Pics/capm.jpg", "Captain Marvel", "Carole Denvers", "Humain", "Oui", false); */

  listHeros : MonPerso[] = [];
  constructor(private persoService:PersoServiceService)
  {
    this.persoService.ajouterPerso(new MonPerso("/assets/Pics/bat.png", "Batman", "Bruce Wayne", "Humain", "Non", false));
    this.persoService.ajouterPerso(new MonPerso("/assets/Pics/wolvy.jpg", "Wolverine", "Logan", "Mutant", "Oui", false));
    this.persoService.ajouterPerso( new MonPerso("/assets/Pics/cap.jpg", "Capitaine Flam", "Inconnue", "Humain", "Non", false));
    this.listHeros = this.persoService.recupererListePersos();
  }
}
