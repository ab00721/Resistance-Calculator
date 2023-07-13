import { browser, by, element } from 'protractor';

export class CalculatorService {

  constructor() {}

  selectColors(colors: string[]) {
  	const dropdowns = element.all(by.css('select'));

  	colors.forEach(async (color,index) => {
    	const dropdown = dropdowns.get(index);
    	await dropdown.click();

    	const options = dropdown.all(by.css('option'));
    	await options.each(async (option) => {
        const text = await option.getText();
      	if (text === color) {
        	option.click();
      	}
    	});
  	});
  }

  getResistance() {
   	return element(by.id('resistance')).getText();
  }

  getMessage() {
   	return element(by.id('message')).getText();
  }

 }
