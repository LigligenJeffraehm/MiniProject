import { Component,inject } from '@angular/core';
import { ServicePokemonService } from '../service-pokemon.service';

@Component({
  selector: 'app-johto',
  templateUrl: './johto.component.html',
  styleUrl: './johto.component.css'
})
export class JohtoComponent {
  pokemonService = inject (ServicePokemonService);
}
