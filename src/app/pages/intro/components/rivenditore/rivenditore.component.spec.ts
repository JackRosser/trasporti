import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivenditoreComponent } from './rivenditore.component';

describe('RivenditoreComponent', () => {
  let component: RivenditoreComponent;
  let fixture: ComponentFixture<RivenditoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RivenditoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RivenditoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
