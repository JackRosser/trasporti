import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoMezziComponent } from './inserimento-mezzi.component';

describe('InserimentoMezziComponent', () => {
  let component: InserimentoMezziComponent;
  let fixture: ComponentFixture<InserimentoMezziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserimentoMezziComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserimentoMezziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
