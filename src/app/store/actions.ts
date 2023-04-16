import { createAction, props } from "@ngrx/store";
import { Pokemon } from "../models/pokemon.model";

export const setSearchedPokemon = createAction(
    '[Poke Team] Set Searched Pokemon',
    props<{ pokemon: Pokemon }>()
);

export const addPokemonToTeam = createAction(
    '[Poke Team] Add Pokemon',
    props<{ pokemon: Pokemon }>()
);

export const removePokemonFromTeam = createAction(
    '[Poke Team] Remove Pokemon',
    props<{ index: number }>()
);