import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangeLogComponent } from './add-change-log.component';

describe('AddChangeLogComponent', () => {
  let component: AddChangeLogComponent;
  let fixture: ComponentFixture<AddChangeLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChangeLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChangeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
