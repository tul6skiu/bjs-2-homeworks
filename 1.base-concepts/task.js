"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0) {
    return [];
} else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
} else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
}

  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyRate = (percent / 100) / 12;

  const loanBody = amount - contribution;

  if (loanBody <= 0) {
      return 0; 
  }
  const monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

  const totalPayment = monthlyPayment * countMonths;

  return Number(totalPayment.toFixed(2));
}