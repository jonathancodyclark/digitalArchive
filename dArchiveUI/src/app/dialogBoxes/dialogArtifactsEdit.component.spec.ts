import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArtifactsEditComponent } from './dialogArtifactsEdit.component';

describe('DialogBodyDeatilComponent', () => {
  let component: DialogArtifactsEditComponent;
  let fixture: ComponentFixture<DialogArtifactsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogArtifactsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogArtifactsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});