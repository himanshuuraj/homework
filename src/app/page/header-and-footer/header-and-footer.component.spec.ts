import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAndFooterComponent } from './header-and-footer.component';

describe('HeaderAndFooterComponent', () => {
  let component: HeaderAndFooterComponent;
  let fixture: ComponentFixture<HeaderAndFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAndFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAndFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
