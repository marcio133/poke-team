import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
    providedIn: 'root',
})
export class PokeApiService {
    constructor(public http: HttpClient) { }

    public getPokemon(query: string): Observable<Pokemon> {
        console.log(query)
        return this.http.get<Pokemon>(
            `https://pokeapi.co/api/v2/pokemon/${query}`
        );
    }
}
