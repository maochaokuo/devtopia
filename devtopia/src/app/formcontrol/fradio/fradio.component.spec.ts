import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FradioComponent } from './fradio.component';

describe('FradioComponent', () => {
  let component: FradioComponent;
  let fixture: ComponentFixture<FradioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FradioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
