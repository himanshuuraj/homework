import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentoptionComponent } from './studentoption.component';

describe('StudentoptionComponent', () => {
  let component: StudentoptionComponent;
  let fixture: ComponentFixture<StudentoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
