import { Component, Input, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Results } from '../../models/results.model';
// import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // calculatorService = inject(CalculatorService);

  // dataYear = this.calculatorService.calculatedData;

  @Input() results? = signal<Results[] | undefined>(undefined);
}
