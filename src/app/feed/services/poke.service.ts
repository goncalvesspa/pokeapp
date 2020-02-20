import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { 
  }

  getPokemon(): Observable<Pokemon> {

    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/5/');
  }

}
