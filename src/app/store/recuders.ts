import { createReducer, on } from "@ngrx/store";
import { Pokemon } from "../models/pokemon.model";
import * as PokeTeamActions from './actions';

export interface State {
    team: Pokemon[];
    searchedPokemon: Pokemon | null;
}

export const initialState: State = {
    team: [],
    searchedPokemon: null,
};

export const pokeTeamReducer = createReducer(
    initialState,
    on(PokeTeamActions.setSearchedPokemon, (state, { pokemon }) => ({ ...state, searchedPokemon: pokemon })),
    on(PokeTeamActions.addPokemonToTeam, (state, { pokemon }) => {
        return state.team.length >= 6 
            ? { ... state } 
            : { ...state, team: [ ...state.team, pokemon ] };
    }),
    on(PokeTeamActions.removePokemonFromTeam, (state, { index }) => {
        return { ...state, team: [ ...state.team.splice(index, 1) ] }
    }),
);