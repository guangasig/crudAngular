import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AunthComponent } from './aunth.component';

describe('AunthComponent', () => {
  let component: AunthComponent;
  let fixture: ComponentFixture<AunthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AunthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AunthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
