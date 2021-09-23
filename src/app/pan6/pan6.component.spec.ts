import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pan6Component } from './pan6.component';

describe('Pan6Component', () => {
  let component: Pan6Component;
  let fixture: ComponentFixture<Pan6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pan6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pan6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
