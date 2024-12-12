import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTrattaComponent } from './insert-tratta.component';

describe('InsertTrattaComponent', () => {
  let component: InsertTrattaComponent;
  let fixture: ComponentFixture<InsertTrattaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertTrattaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTrattaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
