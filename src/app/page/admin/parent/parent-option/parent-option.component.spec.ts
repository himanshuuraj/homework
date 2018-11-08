import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOptionComponent } from './parent-option.component';

describe('ParentOptionComponent', () => {
  let component: ParentOptionComponent;
  let fixture: ComponentFixture<ParentOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
