const operations = require('./calculation');

const ratePerHour = 300;
const taxRate = 0.1;
const sssCost = 1200;
const pagIbigCost = 300;
const philHealthCost = 400;
const hoursWorked = 4;
const daysWorked = 6;

const salaryPerDay = operations.multiply(ratePerHour, hoursWorked);
const grossIncome = operations.multiply(salaryPerDay, daysWorked);

const taxValue = operations.multiply(taxRate, grossIncome);
const totalDeductions = operations.add(
  taxValue,
  sssCost,
  pagIbigCost,
  philHealthCost
);

const netIncome = operations.subtract(grossIncome, totalDeductions);

console.log(`The gross income is: ${grossIncome}`);
console.log(`Tax: ${taxValue}`);
console.log(`SSS: ${sssCost}`);
console.log(`Pag-Ibig Fund: ${pagIbigCost}`);
console.log(`Philhealth: ${philHealthCost}`);
console.log(`Total Deductions: ${totalDeductions}`);
console.log(`Net Income: ${netIncome}`);

