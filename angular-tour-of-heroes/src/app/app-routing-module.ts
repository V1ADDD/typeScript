import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heroes } from './heroes/heroes';
import { Dashboard } from './dashboard/dashboard';
import { HeroDetail } from './hero-detail/hero-detail';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: Heroes },
  { path: 'dashboard', component: Dashboard },
  { path: 'detail/:id', component: HeroDetail }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
