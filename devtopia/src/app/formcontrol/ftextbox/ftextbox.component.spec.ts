import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtextboxComponent } from './ftextbox.component';

describe('FtextboxComponent', () => {
  let component: FtextboxComponent;
  let fixture: ComponentFixture<FtextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
