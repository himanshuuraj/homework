import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassoptionComponent } from './classoption.component';

describe('ClassoptionComponent', () => {
  let component: ClassoptionComponent;
  let fixture: ComponentFixture<ClassoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
