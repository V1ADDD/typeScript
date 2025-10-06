import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: Message) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HerroService: fetched heroes');
    return heroes;
  }
}
