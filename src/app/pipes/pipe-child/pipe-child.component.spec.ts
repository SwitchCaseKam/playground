import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeChildComponent } from './pipe-child.component';

describe('PipeChildComponent', () => {
  let component: PipeChildComponent;
  let fixture: ComponentFixture<PipeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
