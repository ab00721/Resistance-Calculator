import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  private digitValue: { [color: string]: number } = {
    'Black': 0,
    'Brown': 1,
    'Red': 2,
    'Orange': 3,
    'Yellow': 4,
    'Green': 5,
    'Blue': 6,
    'Violet': 7,
    'Grey': 8,
    'White': 9
  };

  private multiplierValue: { [color: string]: number } = {
    'Black': 1,
    'Brown': 10,
    'Red': 100,
    'Orange': 1000,
    'Yellow': 10000,
    'Green': 100000,
    'Blue': 1000000
  };

  private toleranceValue: { [color: string]: number } = {
    'Brown': 1,
    'Red': 2,
    'Green': 0.5,
    'Blue': 0.25,
    'Violet': 0.1,
    'Gold': 5,
    'Silver': 10
  };

  constructor() {}

  calculateResistance(colors: string[]) {
    const digits: number[] = [];
    for (let i = 0; i < 3; i++) {
      const color = colors[i];
      const value = this.getDigitValue(color);
      digits.push(value);
    }
    const value = this.concatenateDigits(digits);
    const multiplier = this.getMultiplierValue(colors[3]);
    const tolerance = this.getToleranceValue(colors[4]);
    const resistance = value*multiplier;

    return resistance + ' \u00B1 ' + tolerance + '%';
  }

  getDigitValue(color: string): number {
    return this.digitValue[color];
  }

  getMultiplierValue(color: string): number {
    return this.multiplierValue[color];
  }

  getToleranceValue(color: string): number {
    return this.toleranceValue[color];
  }

  concatenateDigits(digits: number[]): number {
    return parseInt(digits.join(''));
  }

}
