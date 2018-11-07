import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherOptionComponent } from './teacher-option.component';

describe('TeacherOptionComponent', () => {
  let component: TeacherOptionComponent;
  let fixture: ComponentFixture<TeacherOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
