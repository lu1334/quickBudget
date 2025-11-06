import { validateRequiredFields } from "../utils/validateRequiredFields";
import { useBudgetContext } from "../context/quickBudgetContext";

export const useInputHandler = () => {
  const aux = useBudgetContext();
  const handlerOnChangeIncome = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    aux.setIncome(Number(event.target.value));
  };
  const handlerOnChangeAmountExpense = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    aux.setAmountExpense(Number(event.target.value));
  };
  const handlerOnChangeConcept = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    aux.setConcept(event.target.value);
  };
  const handlerAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateRequiredFields(aux.concept, aux.amountExpense)) return;
    aux.setListItem((prev) => [
      ...prev,
      {
        id: Date.now(),
        concept: aux.concept,
        amountExpense: aux.amountExpense,
      },
    ]);
  };
  const handlerAddIncome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aux.setListIncome((prev) => [...prev, aux.income]);
  };

  return {
    handlerAdd,
    handlerAddIncome,
    handlerOnChangeAmountExpense,
    handlerOnChangeConcept,
    handlerOnChangeIncome,
  };
};
