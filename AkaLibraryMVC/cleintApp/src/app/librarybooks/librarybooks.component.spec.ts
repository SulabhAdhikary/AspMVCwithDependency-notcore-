import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarybooksComponent } from './librarybooks.component';

describe('LibrarybooksComponent', () => {
  let component: LibrarybooksComponent;
  let fixture: ComponentFixture<LibrarybooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarybooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
