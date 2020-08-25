import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  pipes: [FilterPipe],
})

export class HeroesComponent implements OnInit {
   
  heroes = HEROES;

  selectedHero: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  @Input() subtitle;
  @Output() onHello = new EventEmitter();

  fireEvent(e){
    this.onHello.emit(e);
    console.log(e);
  }
  constructor() { }

  ngOnInit(): void {
   
  }
 
}
