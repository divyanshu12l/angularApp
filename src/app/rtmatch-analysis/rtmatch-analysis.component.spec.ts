import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTMatchAnalysisComponent } from './rtmatch-analysis.component';

describe('RTMatchAnalysisComponent', () => {
  let component: RTMatchAnalysisComponent;
  let fixture: ComponentFixture<RTMatchAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTMatchAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RTMatchAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
