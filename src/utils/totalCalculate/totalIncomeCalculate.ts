
export const totalIncomeCalculate = (arrIncome: number[]) => {
  const totalIncome = arrIncome.reduce((a, b) => a + b, 0);
  return totalIncome 
};
