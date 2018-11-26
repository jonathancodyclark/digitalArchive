import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExhibitsDeleteComponent } from './dialogExhibitsDelete.component';

describe('DialogBodyComponent', () => {
  let component: DialogExhibitsDeleteComponent;
  let fixture: ComponentFixture<DialogExhibitsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogExhibitsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExhibitsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});