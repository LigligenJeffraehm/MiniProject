import { Component, inject } from '@angular/core';
import { ServicePokemonService } from '../service-pokemon.service';

@Component({
  selector: 'app-kanto',
  standalone:true,
  templateUrl: './kanto.component.html',
  styleUrl: './kanto.component.css'
})
export class KantoComponent {
  pokemonService = inject (ServicePokemonService);
}
