import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSeatingComponent } from './game-seating.component';

describe('GameSeatingComponent', () => {
  let component: GameSeatingComponent;
  let fixture: ComponentFixture<GameSeatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSeatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
