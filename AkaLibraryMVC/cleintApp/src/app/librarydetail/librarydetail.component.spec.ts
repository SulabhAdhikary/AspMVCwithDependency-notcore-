import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarydetailComponent } from './librarydetail.component';

describe('LibrarydetailComponent', () => {
  let component: LibrarydetailComponent;
  let fixture: ComponentFixture<LibrarydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
