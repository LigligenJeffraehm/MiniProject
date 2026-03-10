import { Routes } from '@angular/router';
import { KantoComponent } from './kanto/kanto.component';
import { JohtoComponent } from './johto/johto.component';
import { HoennComponent } from './hoenn/hoenn.component';
import { PokemartComponent } from './pokemart/pokemart.component';

export const routes: Routes = [
    {path:'pokemart', component:PokemartComponent},
    {path:'kanto', component:KantoComponent},
    {path:'johto', component:JohtoComponent},
    {path:'hoenn', component:HoennComponent},
    {path: '', redirectTo:'home', pathMatch:'full'}
];
