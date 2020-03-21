import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLogListComponent } from './change-log-list.component';

describe('ChangeLogListComponent', () => {
  let component: ChangeLogListComponent;
  let fixture: ComponentFixture<ChangeLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
