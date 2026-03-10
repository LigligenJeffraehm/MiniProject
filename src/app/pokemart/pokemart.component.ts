import { Component, inject } from '@angular/core';
import { ServicePokemonService } from '../service-pokemon.service';
import { PokecartComponent } from '../pokecart/pokecart.component';

@Component({
  selector: 'app-pokemart',
  standalone:true,
  imports:[PokecartComponent],
  templateUrl: './pokemart.component.html',
  styleUrl: './pokemart.component.css'
})
export class PokemartComponent {
  pokemonService = inject(ServicePokemonService);
}
