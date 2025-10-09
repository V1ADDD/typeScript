import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero-service';

@Component({
  selector: 'app-hero-detail',
  standalone: false,
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetail {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.getHero();
  }
  hero?: Hero;
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe({
        next: hero => this.hero = hero,
        error: console.log,
        complete: () => this.cdr.markForCheck()
      });
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
