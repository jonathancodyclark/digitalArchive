import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArtifactsDeleteComponent } from './dialogArtifactsDelete.component';

describe('DialogArrtifactsDeleteComponent', () => {
  let component: DialogArtifactsDeleteComponent;
  let fixture: ComponentFixture<DialogArtifactsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogArtifactsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogArtifactsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
