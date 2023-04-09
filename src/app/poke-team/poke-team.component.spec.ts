import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTeamComponent } from './poke-team.component';

describe('PokeTeamComponent', () => {
  let component: PokeTeamComponent;
  let fixture: ComponentFixture<PokeTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
