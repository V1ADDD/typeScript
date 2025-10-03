import { Component, signal } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss'
})
export class Heroes {
  heroes: Hero[] = HEROES;
  selectedHero = signal<Hero | undefined>(undefined);
  onSelect(hero: Hero): void {
    this.selectedHero?.set(hero);
  }
}
