import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState, selectPokeTeam } from '../store/selectors';
import { removePokemonFromTeam } from '../store/actions';
import { Pokemon } from '../models/pokemon.model';
import { COLORS } from '../models/pokemon.consts';

@Component({
  selector: 'app-poke-team',
  templateUrl: './poke-team.component.html',
  styleUrls: ['./poke-team.component.scss']
})
export class PokeTeamComponent implements OnInit, OnDestroy {
    public team: Pokemon[] = [];
    public subscription$!: Subscription;
    public colors = COLORS;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.subscription$ = this.store.select(selectPokeTeam)
            .subscribe(team => this.team = team);
    }

    ngOnDestroy(): void {
        this.subscription$.unsubscribe();
    }

    remove(index: number): void {
        this.store.dispatch(removePokemonFromTeam({ index }))
    }
}

