import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../sevices/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-heroes',
  templateUrl: './filter-heroes.component.html'
})
export class FilterHeroesComponent implements OnInit {

  filterHeroes: Array<Heroe>;
  param: Heroe;

  constructor( private _activeRouter: ActivatedRoute, private _heroes: HeroesService) {
  }

  ngOnInit() {
    this._activeRouter.params.subscribe(params => {
      this.filterHeroes = this._heroes.searchHeroes( params['id'] );
      this.param = params['id'];
    });
  }

}
