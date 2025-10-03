import { Component, model, ModelSignal, WritableSignal } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss'
})
export class Heroes {
  hero: ModelSignal<Hero> = model({
    id: 1,
    name: 'Windstorm'
  });
}
