import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDynamicComponentComponent } from './child-dynamic-component.component';

describe('ChildDynamicComponentComponent', () => {
  let component: ChildDynamicComponentComponent;
  let fixture: ComponentFixture<ChildDynamicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildDynamicComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
