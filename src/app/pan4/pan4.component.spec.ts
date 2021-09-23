import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pan4Component } from './pan4.component';

describe('Pan4Component', () => {
  let component: Pan4Component;
  let fixture: ComponentFixture<Pan4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pan4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pan4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
