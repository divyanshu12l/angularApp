import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pan1Component } from './pan1.component';

describe('Pan1Component', () => {
  let component: Pan1Component;
  let fixture: ComponentFixture<Pan1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pan1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
