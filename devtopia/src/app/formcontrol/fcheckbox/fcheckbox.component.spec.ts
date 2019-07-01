import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcheckboxComponent } from './fcheckbox.component';

describe('FcheckboxComponent', () => {
  let component: FcheckboxComponent;
  let fixture: ComponentFixture<FcheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
