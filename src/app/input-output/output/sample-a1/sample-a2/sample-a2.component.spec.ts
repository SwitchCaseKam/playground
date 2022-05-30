import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleA2Component } from './sample-a2.component';

describe('SampleA2Component', () => {
  let component: SampleA2Component;
  let fixture: ComponentFixture<SampleA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleA2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
