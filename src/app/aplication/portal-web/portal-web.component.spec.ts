import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalWebComponent } from './portal-web.component';

describe('PortalWebComponent', () => {
  let component: PortalWebComponent;
  let fixture: ComponentFixture<PortalWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
