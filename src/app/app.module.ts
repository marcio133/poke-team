import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeTeamComponent } from './poke-team/poke-team.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeSearchComponent,
    PokeTeamComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
