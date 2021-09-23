import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pan10Component } from './pan10.component';

describe('Pan10Component', () => {
  let component: Pan10Component;
  let fixture: ComponentFixture<Pan10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pan10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pan10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
