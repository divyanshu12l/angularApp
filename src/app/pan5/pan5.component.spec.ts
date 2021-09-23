import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pan5Component } from './pan5.component';

describe('Pan5Component', () => {
  let component: Pan5Component;
  let fixture: ComponentFixture<Pan5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pan5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pan5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
