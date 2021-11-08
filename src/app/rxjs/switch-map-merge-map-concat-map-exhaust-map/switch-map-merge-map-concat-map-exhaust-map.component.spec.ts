import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapMergeMapConcatMapExhaustMapComponent } from './switch-map-merge-map-concat-map-exhaust-map.component';

describe('SwitchMapMergeMapConcatMapExhaustMapComponent', () => {
  let component: SwitchMapMergeMapConcatMapExhaustMapComponent;
  let fixture: ComponentFixture<SwitchMapMergeMapConcatMapExhaustMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchMapMergeMapConcatMapExhaustMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMapMergeMapConcatMapExhaustMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
