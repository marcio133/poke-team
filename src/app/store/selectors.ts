import { createSelector } from "@ngrx/store";
import { PokeTeamState } from "./recuders";

export interface AppState {
    pokeTeam: PokeTeamState
}

export const selectFeature = (state: AppState) => state.pokeTeam;

export const selectPokeTeam = createSelector(
    selectFeature,
    (state: PokeTeamState) => state.team
);

