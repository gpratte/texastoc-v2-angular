import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPlayerComponent } from './existing-player.component';

describe('ExistingPlayerComponent', () => {
  let component: ExistingPlayerComponent;
  let fixture: ComponentFixture<ExistingPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
