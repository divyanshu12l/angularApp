import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteProfilingComponent } from './athlete-profiling.component';

describe('AthleteProfilingComponent', () => {
  let component: AthleteProfilingComponent;
  let fixture: ComponentFixture<AthleteProfilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteProfilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteProfilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
