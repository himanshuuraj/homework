import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclassandsectionComponent } from './listclassandsection.component';

describe('ListclassandsectionComponent', () => {
  let component: ListclassandsectionComponent;
  let fixture: ComponentFixture<ListclassandsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListclassandsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListclassandsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
