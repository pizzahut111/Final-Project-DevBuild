import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchparkComponent } from './searchpark.component';

describe('SearchparkComponent', () => {
  let component: SearchparkComponent;
  let fixture: ComponentFixture<SearchparkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchparkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
