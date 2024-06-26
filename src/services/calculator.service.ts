// import { Injectable } from '@angular/core';
// import { Calculator } from '../models/calculator.model';

// @Injectable({ providedIn: 'root' })
// export class CalculatorService{
//   calculator: Calculator = {
//       initial: 0,
//       annual: 0,
//       expected: 0,
//       duration: 0,
//     }

//     calculatedData = this.calculateInvestmentResults();

//     updateData(data: Calculator){this.calculator = data;}

//     checkData(){console.log(this.calculator)}

//     calculateInvestmentResults() {
//       const annualData = [];
//       let investmentValue = this.calculator.initial;
    
//       for (let i = 0; i < this.calculator.duration; i++) {
//         const year = i + 1;
//         const interestEarnedInYear = investmentValue * (this.calculator.expected / 100);
//         investmentValue += interestEarnedInYear + this.calculator.annual;
//         const totalInterest =
//           investmentValue - this.calculator.annual * year - this.calculator.initial;
//         annualData.push({
//           year: year,
//           interest: interestEarnedInYear,
//           valueEndOfYear: investmentValue,
//           annualInvestment: this.calculator.annual,
//           totalInterest: totalInterest,
//           totalAmountInvested: this.calculator.initial + this.calculator.annual * year,
//         });
//       }
//       console.log(annualData)
//       return annualData;
//     }
// }
