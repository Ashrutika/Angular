import { Component, OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit,OnDestroy,OnChanges,AfterContentInit,AfterContentChecked {
  heroes:any[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    console.log("ngOnInit() called");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() called");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy() called");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit() called");
  }
  ngOnChanges(){
    console.log("ngOnChanges() called");
  }
  item;
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0,5));
  }
}