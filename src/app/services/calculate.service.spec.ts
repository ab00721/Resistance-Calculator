import { TestBed } from '@angular/core/testing';

import { CalculateService } from './calculate.service';

describe('CalculateService', () => {
  let service: CalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct digit', () => {
    const color = 'Red';
    const expectedValue = 2;
    expect(service.getDigitValue(color)).toEqual(expectedValue);
  });

  it('should return correct multiplier', () => {
    const color = 'Blue';
    const expectedValue = 1000000;
    expect(service.getMultiplierValue(color)).toEqual(expectedValue);
  });

  it('should return correct tolerance', () => {
    const color = 'Green';
    const expectedValue = 0.5;
    expect(service.getToleranceValue(color)).toEqual(expectedValue);
  });

  it('should concatenate digits', () => {
    const digits = [1,2,3];
    const expectedValue = 123;
    expect(service.concatenateDigits(digits)).toEqual(expectedValue);
  });

  it('should calculate resistance correctly', () => {
    const colors = ['Red','Orange','Yellow','Green','Blue'];
    const expectedValue = '23400000 \u00B1 0.25%';
    expect(service.calculateResistance(colors)).toEqual(expectedValue);
  });
});
