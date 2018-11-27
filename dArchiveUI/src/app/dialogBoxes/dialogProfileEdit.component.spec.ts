import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProfileEditComponent } from './dialogProfileEdit.component';

describe('DialogProfileEditComponent', () => {
  let component: DialogProfileEditComponent;
  let fixture: ComponentFixture<DialogProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});