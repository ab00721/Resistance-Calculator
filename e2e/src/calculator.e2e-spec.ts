import { browser, by, element } from 'protractor';
import { CalculatorService } from './calculator.service'

describe('Calculator', () => {
  let calculatorService;

  beforeEach(() => {
    calculatorService = new CalculatorService();
  });

  it('should have message to select band colors', () => {
    expect(calculatorService.getMessage()).toEqual('Please select color of each band');
  });

  it('should have select message after selecting first color', () => {
    const colors = [ 'Brown', '', '', '', ''];
    calculatorService.selectColors(colors);
    expect(calculatorService.getMessage()).toEqual('Please select color of each band');
    expect(calculatorService.getResistance()).toEqual('Resistance:');
  });

  it('should have select message after selecting any 1 color', () => {
    const colors = [ '', '', '', 'Blue', ''];
    calculatorService.selectColors(colors);
    expect(calculatorService.getMessage()).toEqual('Please select color of each band');
    expect(calculatorService.getResistance()).toEqual('Resistance:');
  });

  it('should have select message after selecting multiple colors', () => {
    const colors = [ 'Red', 'Orange', 'Yellow', 'Green', ''];
    calculatorService.selectColors(colors);
    expect(calculatorService.getMessage()).toEqual('Please select color of each band');
    expect(calculatorService.getResistance()).toEqual('Resistance:');
  });

  it('should display resistance and no message after selecting all colors', async () => {
    const colors = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue'];
    calculatorService.selectColors(colors);
    await browser.wait(async () => {
      const message = await calculatorService.getMessage();
      return message === '';
    }, 5000, 'Resistance calculation did not complete.');
    expect(calculatorService.getResistance()).toEqual('Resistance: 23400000 \u00B1 0.25%');
  });

});
