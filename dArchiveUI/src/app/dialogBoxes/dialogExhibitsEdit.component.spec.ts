import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExhibitsEditComponent } from './dialogExhibitsEdit.component';

describe('DialogBodyDeatilComponent', () => {
  let component: DialogExhibitsEditComponent;
  let fixture: ComponentFixture<DialogExhibitsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogExhibitsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExhibitsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
