import { Injectable, signal, computed } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServicePokemonService {

  kanto = signal([
    {Name:'Pikachu', Type:'Electric', HeldItem:'Light Ball', Desc:'A small, yellow mouse Pokémon known for its powerful electric attacks and popularity as the series mascot.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfzYtn-eRiOeIygbWQ6S5yecoe-TpaJGngA&s'},
    {Name:'Charmander', Type:'Fire', HeldItem:'Charcoal', Desc:'A lizard Pokémon with a flame on its tail that burns brighter when it is healthy and strong.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbF89fbVuE3fvi_gI1RNv0QbbJal5kdSHPQ&s'},
    {Name:'Bulbasaur', Type:'Grass/Poison', HeldItem:'Miracle Seed', Desc:'A seed Pokémon with a plant bulb on its back that grows as it evolves.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuqPcuz43t6yJdAThzO2Tlt2cC2ohuH426Q&s'},
    {Name:'Squirtle', Type:'Water', HeldItem:'Mystic Water', Desc:'A turtle Pokémon that withdraws into its shell for protection and sprays water to attack.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvgt4O7bdc3ZlDEvYvma4MmUh_by2nZrV0A&s'},
    {Name:'Pidgey', Type:'Normal/Flying', HeldItem:'Sharp Beak', Desc:'A small bird Pokémon that is very common in Kanto, known for its gentle nature and flying ability.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ob72Gj6an6R9Ha8qF0wm-pLWf-AyZ-bX1A&s'},
    {Name:'Rattata', Type:'Normal', HeldItem:'Focus Sash', Desc:'A quick and nimble rodent Pokémon that is found almost everywhere in Kanto.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTki8HU_gK-Vo7MUER7rhbOjcRG7OwB2x3KMQ&s'},
  ]);

  johto = signal ([
    {Name:'Chikorita', Type:'Grass', HeldItem:'Miracle Seed', Desc:'A gentle leaf Pokémon that uses the leaf on its head to sense and soothe others.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKP40Xv8bqP8kY1QxaxbehjhHCujs1AvLxTw&s'},
    {Name:'Cyndaquil', Type:'Fire', HeldItem:'Charcoal', Desc:'A timid fire mouse Pokémon whose back flames flare up when it feels threatened.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUcRRiTL3I3cyGiFHh0pI1Vo79-ZMIwaflug&s'},
    {Name:'Totodile', Type:'Water', HeldItem:'Mystic Water', Desc:'A lively crocodile Pokémon that loves to bite playfully and splash around.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2VRjqLLnj5Eg33SuKVh8g508_rgoQB5JK6g&s'},
    {Name:'Sentret', Type:'Normal', HeldItem:'Oran Berry', Desc:'A small scout Pokémon that stands on its tail to keep watch for danger.',image:'https://img.pokemondb.net/artwork/large/sentret.jpg'},
    {Name:'Hoothoot', Type:'Normal/Flying', HeldItem:'Sharp Beak', Desc:'An owl Pokémon that hoots at the same time every day, known for its precise internal clock.',image:'https://img.pokemondb.net/artwork/large/hoothoot.jpg'},
    {Name:'Mareep', Type:'Electric', HeldItem:'Light Ball', Desc:'A fluffy sheep Pokémon that stores static electricity in its wool.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaT5XPukvOJkmRjaWLpU2ENJ9LEvlWGqbJ5Q&s'},
  ]);


  hoenn = signal ([
    {Name:'Treecko', Type:'Grass', HeldItem:'Miracle Seed', Desc:'A gecko Pokémon that is calm and collected, often found clinging to trees.',image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/252.png'},
    {Name:'Torchic', Type:'Fire', HeldItem:'Charcoal', Desc:'A chick Pokémon that breathes fire and grows stronger as it evolves.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcXablp2iX7n7L1jcrF63u3WXeYm03xLAAA&s'},
    {Name:'Mudkip', Type:'Water', HeldItem:'Mystic Water', Desc:'A mud fish Pokémon that is strong in water and can sense movement with its fin.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa8WThqr89iM_ZhoprqfGCMgtDFfTBVRi3Mw&s'},
    {Name:'Zigzagoon', Type:'Normal', HeldItem:'Oran Berry', Desc:'A raccoon Pokémon that is curious and constantly moves in zigzag patterns.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Tc6O6QCopoG2YHlnU8PMpmXiB4uOyN8QUA&s'},
    {Name:'Wurmple', Type:'Bug', HeldItem:'Silver Powder', Desc:'A worm Pokémon that feeds on leaves and evolves into either Beautifly or Dustox.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMU8PcnKNdd1fge43vsq1-1pHJJio2Z4gpg&s'},
    {Name:'Taillow', Type:'Normal/Flying', HeldItem:'Sharp Beak', Desc:'A small swallow Pokémon that is brave despite its tiny size and often travels in flocks.',image:'https://img.pokemondb.net/artwork/large/taillow.jpg'},
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

