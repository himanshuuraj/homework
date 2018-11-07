import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclassandsectionComponent } from './addclassandsection.component';

describe('AddclassandsectionComponent', () => {
  let component: AddclassandsectionComponent;
  let fixture: ComponentFixture<AddclassandsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclassandsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclassandsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
