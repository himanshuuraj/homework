import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectoptionComponent } from './subjectoption.component';

describe('SubjectoptionComponent', () => {
  let component: SubjectoptionComponent;
  let fixture: ComponentFixture<SubjectoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
