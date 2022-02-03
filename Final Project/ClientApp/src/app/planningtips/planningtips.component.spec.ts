import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningtipsComponent } from './planningtips.component';

describe('PlanningtipsComponent', () => {
  let component: PlanningtipsComponent;
  let fixture: ComponentFixture<PlanningtipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningtipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningtipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
