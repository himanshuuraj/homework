import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentoptionComponent } from './parentoption.component';

describe('ParentoptionComponent', () => {
  let component: ParentoptionComponent;
  let fixture: ComponentFixture<ParentoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
