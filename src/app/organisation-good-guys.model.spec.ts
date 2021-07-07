import { MonPerso } from './mon-perso.model';
import { OrganisationGoodGuys } from './organisation-good-guys.model';

describe('OrganisationGoodGuys', () => {
  it('should create an instance', () => {
    expect(new OrganisationGoodGuys('Avengers','New York dans la tour',new MonPerso('super.jpg','superman','clark kent','krypton','oui',false))).toBeTruthy();
  });
});
