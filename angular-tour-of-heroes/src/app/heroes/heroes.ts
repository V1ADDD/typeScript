import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero-service';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss'
})
export class Heroes {
  constructor (private heroService: HeroService) {}
  heroes: Hero[] = [];
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
