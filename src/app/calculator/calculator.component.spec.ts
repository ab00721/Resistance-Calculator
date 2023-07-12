import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { CalculateService } from '../services/calculate.service';
import { FormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let service: CalculateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CalculatorComponent ],
      providers: [ CalculateService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(CalculateService);
    fixture.detectChanges();
    fixture.autoDetectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.selectedColors).toEqual(['', '', '', '', '']);
    expect(component.message).toEqual('Please select color of each band');
    expect(component.resistance).toEqual('');
  });

  describe('allColorsSelected', () => {

    it('should be false when not all colors are selected', () => {
      component.selectedColors = ['', 'Red', 'Green', 'Orange', 'Brown'];
      component.updateSelectedColors();
      expect(component.allColorsSelected()).toBeFalse();
      expect(component.message).toBe('Please select color of each band')
      expect(component.resistance).toBeFalsy();
    });

    it('should be true when all colors are selected', () => {
      component.selectedColors = ['Blue', 'Red', 'Green', 'Orange', 'Brown'];
      component.updateSelectedColors();
      expect(component.allColorsSelected()).toBeTrue();
      expect(component.message).toBe('')
      expect(component.resistance).toBeTruthy();
    });

  });

  describe('updateSelectedColors', () => {

    it('should update colors, message, resistance when allColorsSelected', () => {
      expect(component.allColorsSelected()).toBeFalse();
      expect(component.message).toBe('Please select color of each band')
      expect(component.resistance).toBeFalsy();

      component.selectedColors = ['Blue', 'Red', 'Green', 'Orange', 'Brown'];;
      component.updateSelectedColors();

      expect(component.allColorsSelected()).toBeTrue();
      expect(component.message).toEqual('');
      expect(component.resistance).toBeTruthy();
    });

    it('should update selected colors only when not allColorsSelected', () => {
      expect(component.allColorsSelected()).toBeFalse();
      expect(component.message).toBe('Please select color of each band')
      expect(component.resistance).toBeFalsy();

      component.selectedColors = ['', 'Red', 'Green', 'Orange', 'Brown'];;
      component.updateSelectedColors();

      expect(component.allColorsSelected()).toBeFalse();
      expect(component.message).toBe('Please select color of each band')
      expect(component.resistance).toBeFalsy();
    });

  });
});
