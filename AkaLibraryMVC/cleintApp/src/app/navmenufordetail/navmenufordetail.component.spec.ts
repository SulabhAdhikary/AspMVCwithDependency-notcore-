import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmenufordetailComponent } from './navmenufordetail.component';

describe('NavmenufordetailComponent', () => {
  let component: NavmenufordetailComponent;
  let fixture: ComponentFixture<NavmenufordetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavmenufordetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavmenufordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
