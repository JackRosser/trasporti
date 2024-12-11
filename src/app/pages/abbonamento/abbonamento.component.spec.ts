import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbonamentoComponent } from './abbonamento.component';

describe('AbbonamentoComponent', () => {
  let component: AbbonamentoComponent;
  let fixture: ComponentFixture<AbbonamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbbonamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbbonamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
