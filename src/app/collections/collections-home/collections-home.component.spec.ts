import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CollectionsHomeComponent } from './collections-home.component';

describe('CollectionsHomeComponent', () => {
  let component: CollectionsHomeComponent;
  let fixture: ComponentFixture<CollectionsHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
