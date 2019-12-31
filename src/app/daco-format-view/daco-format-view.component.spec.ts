import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DacoFormatViewComponent } from './daco-format-view.component';

describe('DacoFormatViewComponent', () => {
  let component: DacoFormatViewComponent;
  let fixture: ComponentFixture<DacoFormatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DacoFormatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DacoFormatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
