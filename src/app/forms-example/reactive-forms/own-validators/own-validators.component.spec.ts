import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnValidatorsComponent } from './own-validators.component';

describe('OwnValidatorsComponent', () => {
  let component: OwnValidatorsComponent;
  let fixture: ComponentFixture<OwnValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
