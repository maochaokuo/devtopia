import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FckeditorComponent } from './fckeditor.component';

describe('FckeditorComponent', () => {
  let component: FckeditorComponent;
  let fixture: ComponentFixture<FckeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FckeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FckeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
