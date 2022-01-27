import { TestBed } from '@angular/core/testing';

import { TalentSolutionService } from './talent-solution.service';

describe('TalentSolutionService', () => {
  let service: TalentSolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentSolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
