import { TestBed } from '@angular/core/testing';

import { CalismaAlanlariService } from './calisma-alanlari.service';

describe('CalismaAlanlariService', () => {
  let service: CalismaAlanlariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalismaAlanlariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
