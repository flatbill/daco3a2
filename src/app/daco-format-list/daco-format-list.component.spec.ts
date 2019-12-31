import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DacoFormatListComponent } from './daco-format-list.component';

describe('DacoFormatListComponent', () => {
  let component: DacoFormatListComponent;
  let fixture: ComponentFixture<DacoFormatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DacoFormatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DacoFormatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
