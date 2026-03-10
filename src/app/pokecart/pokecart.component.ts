import { Component,inject } from '@angular/core';
import { ServicePokemonService } from '../service-pokemon.service';

@Component({
  selector: 'app-pokecart',
  standalone:true,
  templateUrl: './pokecart.component.html',
  styleUrl: './pokecart.component.css'
})
export class PokecartComponent {
  menuService = inject(ServicePokemonService);
}
