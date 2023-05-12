import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokeSearchStore } from './poke-search.store';

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
