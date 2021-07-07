import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-perso',
  templateUrl: './mon-perso.component.html',
  styleUrls: ['./mon-perso.component.scss']
})
export class MonPersoComponent implements OnInit {
  @Input()persoPhoto="";
  @Input()persoPseudo="";
  @Input()persoIdSecrete="";
  @Input()persoRace="";
  @Input()persopossedeSuperPouvoir="";

  constructor() { }

  ngOnInit(): void {
  }

}
