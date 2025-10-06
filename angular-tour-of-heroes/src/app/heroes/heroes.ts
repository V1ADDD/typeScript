import { Component, signal } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero-service';
import { Message } from '../message';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss'
})
export class Heroes {
  constructor (private heroService: HeroService, private messageService: Message) {}
  heroes: Hero[] = [];
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  selectedHero = signal<Hero | undefined>(undefined);
  onSelect(hero: Hero): void {
    this.selectedHero?.set(hero);
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
