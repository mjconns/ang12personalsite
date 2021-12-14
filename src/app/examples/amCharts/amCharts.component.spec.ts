import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AmChartsComponent } from './amCharts.component';

describe('AmChartsComponent', () => {
  let component: AmChartsComponent;
  let fixture: ComponentFixture<AmChartsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
