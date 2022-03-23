import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireDeTacheComponent } from './gestionnaire-de-tache.component';

describe('GestionnaireDeTacheComponent', () => {
  let component: GestionnaireDeTacheComponent;
  let fixture: ComponentFixture<GestionnaireDeTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionnaireDeTacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnaireDeTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
