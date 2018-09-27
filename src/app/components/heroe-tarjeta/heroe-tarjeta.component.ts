import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  // @Output() heroSelected: EventEmitter<number>;

  constructor( private router: Router) {
    // this.heroSelected = new EventEmitter();
  }

  ngOnInit() { }

  // showHero() {
  //   this.heroSelected.emit(this.index);
  //   console.log(this.index);
  // }
}
