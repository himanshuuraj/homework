import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOptionComponent } from './admin-option.component';

describe('AdminOptionComponent', () => {
  let component: AdminOptionComponent;
  let fixture: ComponentFixture<AdminOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
