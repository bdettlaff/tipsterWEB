import { TestBed } from '@angular/core/testing';

import { GameSelectService } from './game-select.service';

describe('GameSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameSelectService = TestBed.get(GameSelectService);
    expect(service).toBeTruthy();
  });
});
