import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../sevices/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe;

  constructor( private _activatedRoute: ActivatedRoute, private _heroe: HeroesService) {
    this._activatedRoute.params.subscribe(params => {
      this.heroe = _heroe.getHeroe( params['id'] );
    });
  }
}
