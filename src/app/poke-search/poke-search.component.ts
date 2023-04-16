import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokeSearchStore } from './poke-search.store';

const COLORS: { [key: string]: string } = {
	'normal': '#A8A77A',
	'fire': '#EE8130',
	'water': '#6390F0',
	'electric': '#F7D02C',
	'grass': '#7AC74C',
	'ice': '#96D9D6',
	'fighting': '#C22E28',
	'poison': '#A33EA1',
	'ground': '#E2BF65',
	'flying': '#A98FF3',
	'psychic': '#F95587',
	'bug': '#A6B91A',
	'rock': '#B6A136',
	'ghost': '#735797',
	'dragon': '#6F35FC',
	'dark': '#705746',
	'steel': '#B7B7CE',
	'fairy': '#D685AD',
};

@Component({
    selector: 'app-poke-search',
    templateUrl: './poke-search.component.html',
    styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit, OnDestroy {
    public searchForm = new FormGroup({
        search: new FormControl(),
    });
    public pokemon: Pokemon | null = null;
    public colors = COLORS;
    private subscription$: Subscription = new Subscription;

    constructor(private readonly pokeSearchStore: PokeSearchStore) {}

    ngOnInit(): void {
        this.subscription$ = this.pokeSearchStore.resultPokemon$
            .subscribe((pokemon: Pokemon | null) => this.pokemon = pokemon)
    }

    ngOnDestroy(): void {
        this.subscription$.unsubscribe();
    }

    onSearch(): void {
        const { search } = this.searchForm.value;
        this.pokeSearchStore.getPokemon(search.toString().toLowerCase());
    }

}
