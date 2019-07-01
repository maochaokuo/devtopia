import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtextareaComponent } from './ftextarea.component';

describe('FtextareaComponent', () => {
  let component: FtextareaComponent;
  let fixture: ComponentFixture<FtextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
