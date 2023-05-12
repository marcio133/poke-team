import { createAction, props } from "@ngrx/store";
import { Pokemon } from "../models/pokemon.model";

export const addPokemonToTeam = createAction(
    '[Poke Team] Add Pokemon',
    props<{ pokemon: Pokemon }>()
);

export const removePokemonFromTeam = createAction(
    '[Poke Team] Remove Pokemon',
    props<{ index: number }>()
);