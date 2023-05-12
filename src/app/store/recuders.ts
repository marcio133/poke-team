import { createReducer, on } from "@ngrx/store";
import { Pokemon } from "../models/pokemon.model";
import * as PokeTeamActions from './actions';

export interface PokeTeamState {
    team: Pokemon[];
}

export const initialState: PokeTeamState = {
    team: [],
};

export const pokeTeamReducer = createReducer(
    initialState,
    on(PokeTeamActions.addPokemonToTeam, (state, { pokemon }) => {
        return state.team.length >= 6 
            ? { ... state } 
            : { ...state, team: [ ...state.team, pokemon ] };
    }),
    on(PokeTeamActions.removePokemonFromTeam, (state, { index }) => {
        const team = [...state.team];
        team.splice(index, 1);
        return { ...state, team }
    }),
);