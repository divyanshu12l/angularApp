import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeMediaComponent } from './creative-media.component';

describe('CreativeMediaComponent', () => {
  let component: CreativeMediaComponent;
  let fixture: ComponentFixture<CreativeMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
