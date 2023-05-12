import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeTeamComponent } from './poke-team/poke-team.component';
import { PokeSearchStore } from './poke-search/poke-search.store';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { pokeTeamReducer } from './store/recuders';


@NgModule({
  declarations: [
    AppComponent,
    PokeSearchComponent,
    PokeTeamComponent,
    PokeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ pokeTeam: pokeTeamReducer }),
  ],
  providers: [PokeSearchStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
