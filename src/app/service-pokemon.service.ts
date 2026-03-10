import { Injectable, signal, computed } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServicePokemonService {

  kanto = signal([
    {Name:'Pikachu', Type:'Electric', HeldItem:'Light Ball', Desc:'A small, yellow mouse Pokémon known for its powerful electric attacks and popularity as the series mascot.'},
    {Name:'Charmander', Type:'Fire', HeldItem:'Charcoal', Desc:'A lizard Pokémon with a flame on its tail that burns brighter when it is healthy and strong.'},
    {Name:'Bulbasaur', Type:'Grass/Poison', HeldItem:'Miracle Seed', Desc:'A seed Pokémon with a plant bulb on its back that grows as it evolves.'},
    {Name:'Squirtle', Type:'Water', HeldItem:'Mystic Water', Desc:'A turtle Pokémon that withdraws into its shell for protection and sprays water to attack.'},
    {Name:'Pidgey', Type:'Normal/Flying', HeldItem:'Sharp Beak', Desc:'A small bird Pokémon that is very common in Kanto, known for its gentle nature and flying ability.'},
    {Name:'Rattata', Type:'Normal', HeldItem:'Focus Sash', Desc:'A quick and nimble rodent Pokémon that is found almost everywhere in Kanto.'},
  ]);

  johto = signal ([
    {Name:'Chikorita', Type:'Grass', HeldItem:'Miracle Seed', Desc:'A gentle leaf Pokémon that uses the leaf on its head to sense and soothe others.'},
    {Name:'Cyndaquil', Type:'Fire', HeldItem:'Charcoal', Desc:'A timid fire mouse Pokémon whose back flames flare up when it feels threatened.'},
    {Name:'Totodile', Type:'Water', HeldItem:'Mystic Water', Desc:'A lively crocodile Pokémon that loves to bite playfully and splash around.'},
    {Name:'Sentret', Type:'Normal', HeldItem:'Oran Berry', Desc:'A small scout Pokémon that stands on its tail to keep watch for danger.'},
    {Name:'Hoothoot', Type:'Normal/Flying', HeldItem:'Sharp Beak', Desc:'An owl Pokémon that hoots at the same time every day, known for its precise internal clock.'},
    {Name:'Mareep', Type:'Electric', HeldItem:'Light Ball', Desc:'A fluffy sheep Pokémon that stores static electricity in its wool.'},
  ]);


  hoenn = signal ([
    {Name:'Treecko', Type:'Grass', HeldItem:'Miracle Seed', Desc:'A gecko Pokémon that is calm and collected, often found clinging to trees.'},
    {Name:'Torchic', Type:'Fire', HeldItem:'Charcoal', Desc:'A chick Pokémon that breathes fire and grows stronger as it evolves.'},
    {Name:'Mudkip', Type:'Water', HeldItem:'Mystic Water', Desc:'A mud fish Pokémon that is strong in water and can sense movement with its fin.'},
    {Name:'Zigzagoon', Type:'Normal', HeldItem:'Oran Berry', Desc:'A raccoon Pokémon that is curious and constantly moves in zigzag patterns.'},
    {Name:'Wurmple', Type:'Bug', HeldItem:'Silver Powder', Desc:'A worm Pokémon that feeds on leaves and evolves into either Beautifly or Dustox.'},
    {Name:'Taillow', Type:'Normal/Flying', HeldItem:'Sharp Beak', Desc:'A small swallow Pokémon that is brave despite its tiny size and often travels in flocks.'},
  ]);
  item = signal ([
    {Name:'Potion', Price:300},
    {Name:'Super Potion', Price:700},
    {Name:'Hyper Potion', Price:1200},
    {Name:'Poké Ball', Price:200},
    {Name:'Great Ball', Price:600},
    {Name:'Ultra Ball', Price:1200},
    {Name:'Revive', Price:1500},
    {Name:'Antidote', Price:100},
    {Name:'Paralyze Heal', Price:200},
    {Name:'Full Heal', Price:600},
]);
//cart state
  private cartItems = signal<any[]>([]);
  cart = this.cartItems.asReadonly();

  //compute total price
  totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.Price, 0));

  //cart function
  addToCart(product:any){
    this.cartItems.update(current => [...current, product]);
  }

  clearCart(){
    this.cartItems.set([]);
  }
}
