import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokeApiService } from './poke-api.service';

export interface PokeSearchState {
    query: string;
    resultPokemon: Pokemon | null;
}

@Injectable()
export class PokeSearchStore extends ComponentStore<PokeSearchState> {
    readonly resultPokemon$ = this.select(state => state.resultPokemon);

    constructor(private pokeApiService: PokeApiService) {
        super({ query: '', resultPokemon: null });
    }

    readonly getPokemon = this.effect((query$: Observable<string>) => {
        return query$.pipe(
            switchMap((query: string) => this.pokeApiService.getPokemon(query).pipe(
                tapResponse(
                    (pokemon: Pokemon) => this.patchState({ resultPokemon: pokemon }),
                    () => this.patchState({ resultPokemon: null }),
                ),
            )),
        );
    });

}
