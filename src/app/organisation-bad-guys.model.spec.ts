import { MonPerso } from './mon-perso.model';
import { OrganisationBadGuys } from './organisation-bad-guys.model';

describe('OrganisationBadGuys', () => {
  it('should create an instance', () => {
    expect(new OrganisationBadGuys('Avengers','New York dans la tour',new MonPerso('super.jpg','superman','clark kent','krypton','oui',false))).toBeTruthy();
  });
});
