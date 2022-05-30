import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleA3Component } from './sample-a3.component';

describe('SampleA3Component', () => {
  let component: SampleA3Component;
  let fixture: ComponentFixture<SampleA3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleA3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
