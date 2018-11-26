import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUsersDeleteComponent } from './dialogUsersDelete.component';

describe('DialogBodyUserComponent', () => {
  let component: DialogUsersDeleteComponent;
  let fixture: ComponentFixture<DialogUsersDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUsersDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUsersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});