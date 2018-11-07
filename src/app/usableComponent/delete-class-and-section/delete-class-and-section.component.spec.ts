import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassAndSectionComponent } from './delete-class-and-section.component';

describe('DeleteClassAndSectionComponent', () => {
  let component: DeleteClassAndSectionComponent;
  let fixture: ComponentFixture<DeleteClassAndSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteClassAndSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClassAndSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
