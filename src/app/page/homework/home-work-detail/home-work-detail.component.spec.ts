import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkDetailComponent } from './home-work-detail.component';

describe('HomeWorkDetailComponent', () => {
  let component: HomeWorkDetailComponent;
  let fixture: ComponentFixture<HomeWorkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
