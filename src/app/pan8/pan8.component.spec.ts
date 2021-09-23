import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pan8Component } from './pan8.component';

describe('Pan8Component', () => {
  let component: Pan8Component;
  let fixture: ComponentFixture<Pan8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pan8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pan8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
