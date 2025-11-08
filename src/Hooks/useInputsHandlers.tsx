import { validateRequiredFields } from "../utils/validate/validateRequiredFields";
import { useBudgetContext } from "../context/quickBudgetContext";
import { validateRiqueridIncome } from "../utils/validate/validateRequiredIncome";
import { totalIncomeCalculate } from "../utils/totalCalculate/totalIncomeCalculate";
import { totalExpenseCalculate } from "../utils/totalCalculate/totalExpenseCalculate";
import { validateExeedAmount } from "../utils/validate/validateExceedAmount";
export const useInputHandler = () => {
  const aux = useBudgetContext();

  const handlerOnChangeIncome = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    aux.setIncome(event.target.value);
  };

  const handlerOnChangeAmountExpense = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    aux.setAmountExpense(event.target.value);
  };

  const handlerOnChangeConcept = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    aux.setConcept(event.target.value);
  };
  const handlerOnchangeCategoria = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    aux.setCategory(event.target.value);
  };

  const handlerAddExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const arrIncome = Array.isArray(aux.listIncome)
      ? aux.listIncome.map(Number).filter((n) => Number.isFinite(n) && n > 0)
      : [];
    const income = totalIncomeCalculate(arrIncome);
    const currentExpenses = totalExpenseCalculate(aux.listItem);
    const pendingAmount = Number(aux.amountExpense);
    const nextExpenses = currentExpenses + (Number.isFinite(pendingAmount) ? pendingAmount : 0);
    const result = validateExeedAmount(income, nextExpenses);
    if (!result) {
      alert("The expense exceeds the income");
      return;
    }
    if (!validateRequiredFields(aux.concept, aux.amountExpense, aux.category)) {
      return;
    }
    aux.setListItem((prev) => [
      ...prev,
      {
        id: Date.now(),
        category: aux.category,
        concept: aux.concept,
        amountExpense: aux.amountExpense,
      },
    ]);
    aux.setConcept("");
    aux.setAmountExpense("");
    aux.setCategory("");
  };
  const handlerAddIncome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (aux.income.trim() === "") {
      alert("the field is required");
      return;
    } else if (!validateRiqueridIncome(aux.income)) {
      alert("the field must be a number");
      return;
    } else {
      alert("Income added successfully");
    }
    aux.setListIncome((prev) => [...prev, aux.income]);
    aux.setIncome("");
  };

  return {
    handlerAddExpense,
    handlerAddIncome,
    handlerOnchangeCategoria,
    handlerOnChangeAmountExpense,
    handlerOnChangeConcept,
    handlerOnChangeIncome,
  };
};
