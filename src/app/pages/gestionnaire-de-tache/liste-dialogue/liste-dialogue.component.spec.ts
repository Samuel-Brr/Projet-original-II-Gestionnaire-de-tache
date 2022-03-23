import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDialogueComponent } from './liste-dialogue.component';

describe('ListeDialogueComponent', () => {
  let component: ListeDialogueComponent;
  let fixture: ComponentFixture<ListeDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
