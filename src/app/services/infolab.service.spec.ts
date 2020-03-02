import { TestBed } from '@angular/core/testing';
import { InfolabService } from './infolab.service';

describe('InfolabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfolabService = TestBed.get(InfolabService);
    expect(service).toBeTruthy();
  });
});
