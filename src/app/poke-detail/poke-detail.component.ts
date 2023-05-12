import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { AppState } from '../store/selectors';
import { Store } from '@ngrx/store';
import { addPokemonToTeam } from '../store/actions';
import { COLORS } from '../models/pokemon.consts';

@Component({
    selector: 'app-poke-detail',
    templateUrl: './poke-detail.component.html',
    styleUrls: ['./poke-detail.component.scss'],
})
export class PokeDetailComponent {
    @Input() public pokemon!: Pokemon;
    public colors = COLORS;

    constructor(private store: Store<AppState>) {}

    addToTeam() {
        this.store.dispatch(addPokemonToTeam({ pokemon: this.pokemon }));
    }
}
