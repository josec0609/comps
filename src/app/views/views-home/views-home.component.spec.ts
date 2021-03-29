import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewsHomeComponent } from './views-home.component';

describe('ViewsHomeComponent', () => {
  let component: ViewsHomeComponent;
  let fixture: ComponentFixture<ViewsHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
