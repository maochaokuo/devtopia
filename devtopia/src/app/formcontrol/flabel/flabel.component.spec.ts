import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlabelComponent } from './flabel.component';

describe('FlabelComponent', () => {
  let component: FlabelComponent;
  let fixture: ComponentFixture<FlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
