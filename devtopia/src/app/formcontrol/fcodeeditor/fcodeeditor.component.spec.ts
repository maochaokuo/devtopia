import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcodeeditorComponent } from './fcodeeditor.component';

describe('FcodeeditorComponent', () => {
  let component: FcodeeditorComponent;
  let fixture: ComponentFixture<FcodeeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcodeeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcodeeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
