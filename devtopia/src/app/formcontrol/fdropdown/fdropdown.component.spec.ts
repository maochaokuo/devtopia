import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdropdownComponent } from './fdropdown.component';

describe('FdropdownComponent', () => {
  let component: FdropdownComponent;
  let fixture: ComponentFixture<FdropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
