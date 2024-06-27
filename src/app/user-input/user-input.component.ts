import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  userInputInitial = signal('0');
  userInputAnnual = signal('0');
  userInputExpected = signal('5');
  userInputDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
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
