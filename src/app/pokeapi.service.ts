import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getAllPokemon(name: string): Observable<any> {
    return this.http.get(`assets/pokemon.json`);
  }

  getPokemonSpecies(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon-species/${name}`);
  }
}
