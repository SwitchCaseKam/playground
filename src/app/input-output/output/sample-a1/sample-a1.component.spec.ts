import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleA1Component } from './sample-a1.component';

describe('SampleA1Component', () => {
  let component: SampleA1Component;
  let fixture: ComponentFixture<SampleA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleA1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
