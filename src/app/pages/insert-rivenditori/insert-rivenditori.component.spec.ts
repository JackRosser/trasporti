import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRivenditoriComponent } from './insert-rivenditori.component';

describe('InsertRivenditoriComponent', () => {
  let component: InsertRivenditoriComponent;
  let fixture: ComponentFixture<InsertRivenditoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertRivenditoriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertRivenditoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
