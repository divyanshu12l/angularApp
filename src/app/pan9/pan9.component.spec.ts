import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pan9Component } from './pan9.component';

describe('Pan9Component', () => {
  let component: Pan9Component;
  let fixture: ComponentFixture<Pan9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pan9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pan9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
