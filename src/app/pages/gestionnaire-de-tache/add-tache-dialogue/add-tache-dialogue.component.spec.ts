import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTacheDialogueComponent } from './add-tache-dialogue.component';

describe('AddTacheDialogueComponent', () => {
  let component: AddTacheDialogueComponent;
  let fixture: ComponentFixture<AddTacheDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTacheDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTacheDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
