import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../sevices/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Array<Heroe> = [];

  constructor(private _heroesServices: HeroesService, private router: Router) {
  }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }

}
