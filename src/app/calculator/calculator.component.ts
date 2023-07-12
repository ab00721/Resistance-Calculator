import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../services/calculate.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public digitColorCode = ['Black','Brown','Red','Orange','Yellow','Green','Blue','Violet','Grey','White'];
  public multiplierColorCode = ['Black','Brown','Red','Orange','Yellow','Green','Blue'];
  public toleranceColorCode = ['Brown','Red','Green','Blue','Violet','Gold','Silver'];

  public selectedColors: string[] = ['', '', '', '', ''];
  public message: string = 'Please select color of each band';
  public resistance: string = '';

  constructor(private calculateService: CalculateService) { }

  ngOnInit(): void {
  }

  updateSelectedColors() {
    if (this.allColorsSelected()) {
      this.message = '';
      this.resistance = this.calculateService.calculateResistance(this.selectedColors);
    } else {
      this.message = 'Please select color of each band';
    }
    for (let i = 0; i < this.selectedColors.length; i++) {
      this.selectedColors[i] = this.selectedColors[i];
    }
  }

  allColorsSelected() {
    return this.selectedColors.every(color => color !== '');
  }

}
