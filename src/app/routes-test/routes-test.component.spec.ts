import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesTestComponent } from './routes-test.component';

describe('RoutesTestComponent', () => {
  let component: RoutesTestComponent;
  let fixture: ComponentFixture<RoutesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
