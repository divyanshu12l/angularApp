import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pan7Component } from './pan7.component';

describe('Pan7Component', () => {
  let component: Pan7Component;
  let fixture: ComponentFixture<Pan7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pan7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pan7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
