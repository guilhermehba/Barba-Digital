import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardprofissionalComponent } from './cardprofissional.component';

describe('CardprofissionalComponent', () => {
  let component: CardprofissionalComponent;
  let fixture: ComponentFixture<CardprofissionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardprofissionalComponent]
    });
    fixture = TestBed.createComponent(CardprofissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
