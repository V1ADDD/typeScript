import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero-service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard {
  heroes: Hero[] = [];

  constructor (private heroService: HeroService, private cdr: ChangeDetectorRef) {  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe({
        next: heroes => this.heroes = heroes.slice(1,5),
        error: (err) => console.log(err),
        complete: () => this.cdr.markForCheck()
      });
  }
}
