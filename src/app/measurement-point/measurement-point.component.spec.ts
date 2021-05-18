import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementPointComponent } from './measurement-point.component';

describe('MeasurementPointComponent', () => {
  let component: MeasurementPointComponent;
  let fixture: ComponentFixture<MeasurementPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
