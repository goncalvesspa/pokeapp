import { Component, OnInit } from '@angular/core';
import { PokeService } from './services/poke.service';
import { Pokemon } from './services/model/pokemon';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private pokemonService: PokeService) { }

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe(
      (pokemon) => {
          this.pokemon = pokemon;
      }
    )
  }

}
