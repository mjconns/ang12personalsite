import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImgurComponent } from './imgur.component';

describe('ImgurComponent', () => {
  let component: ImgurComponent;
  let fixture: ComponentFixture<ImgurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
