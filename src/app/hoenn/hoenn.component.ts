import { Component, inject } from '@angular/core';
import { ServicePokemonService } from '../service-pokemon.service';

@Component({
  selector: 'app-hoenn',
  templateUrl: './hoenn.component.html',
  styleUrl: './hoenn.component.css'
})
export class HoennComponent {
  pokemonService = inject (ServicePokemonService);
}
