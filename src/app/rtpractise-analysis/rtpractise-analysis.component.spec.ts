import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTPractiseAnalysisComponent } from './rtpractise-analysis.component';

describe('RTPractiseAnalysisComponent', () => {
  let component: RTPractiseAnalysisComponent;
  let fixture: ComponentFixture<RTPractiseAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTPractiseAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RTPractiseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
