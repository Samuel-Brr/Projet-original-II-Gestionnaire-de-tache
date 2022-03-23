import { TestBed } from '@angular/core/testing';

import { ListeDeTachesService } from './liste-de-taches.service';

describe('ListeDeTachesService', () => {
  let service: ListeDeTachesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeDeTachesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
