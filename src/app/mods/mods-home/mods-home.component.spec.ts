import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModsHomeComponent } from './mods-home.component';

describe('ModsHomeComponent', () => {
  let component: ModsHomeComponent;
  let fixture: ComponentFixture<ModsHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
