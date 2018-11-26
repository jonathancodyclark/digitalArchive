import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUsersEditComponent } from './dialogUsersEdit.component';

describe('DialogBodyDeatilComponent', () => {
  let component: DialogUsersEditComponent;
  let fixture: ComponentFixture<DialogUsersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUsersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});