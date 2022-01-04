import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptLearnComponent } from './typescript-learn.component';

describe('TypescriptLearnComponent', () => {
  let component: TypescriptLearnComponent;
  let fixture: ComponentFixture<TypescriptLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
