import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero-service';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Heroes {
  constructor (private heroService: HeroService, private cdr: ChangeDetectorRef) {}
  heroes: Hero[] = [];
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe({
        next: heroes => this.heroes = heroes,
        error: (err) => console.log(err),
        complete: () => this.cdr.markForCheck()
      });
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe({
        next: hero => this.heroes.push(hero),
        error: (err) => console.log(err),
        complete: () => this.cdr.markForCheck()
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
