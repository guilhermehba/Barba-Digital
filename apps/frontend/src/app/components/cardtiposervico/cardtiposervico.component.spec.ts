import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtiposervicoComponent } from './cardtiposervico.component';

describe('CardtiposervicoComponent', () => {
  let component: CardtiposervicoComponent;
  let fixture: ComponentFixture<CardtiposervicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardtiposervicoComponent]
    });
    fixture = TestBed.createComponent(CardtiposervicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
