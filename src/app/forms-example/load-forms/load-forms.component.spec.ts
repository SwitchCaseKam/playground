import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFormsComponent } from './load-forms.component';

describe('LoadFormsComponent', () => {
  let component: LoadFormsComponent;
  let fixture: ComponentFixture<LoadFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
