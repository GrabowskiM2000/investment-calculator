import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { investmentInput } from '../../models/investment-input.model';
// import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // private calculatorService = inject(CalculatorService);

  @Output() calculate = new EventEmitter<investmentInput>();

  userInputInitial = signal('0');
  userInputAnnual = signal('0');
  userInputExpected = signal('5');
  userInputDuration = signal('10');

  onSubmit() {
    //   this.calculatorService.updateData({
    //     initial: this.userInputInitial,
    //     annual: this.userInputAnnual,
    //     expected: this.userInputExpected,
    //     duration: this.userInputDuration,
    //   })
    //   this.calculatorService.checkData();
    //   this.calculatorService.calculateInvestmentResults();

    this.calculate.emit({
      initialInvestment: +this.userInputInitial(),
      duration: +this.userInputDuration(),
      expectedReturn: +this.userInputExpected(),
      annualInvestment: +this.userInputAnnual(),
    });
    this.userInputInitial.set('0');
    this.userInputAnnual.set('0');
    this.userInputExpected.set('5');
    this.userInputDuration.set('10');
  }
}
