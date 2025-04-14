import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pokedex",
    component: PokedexComponent
  }
];
