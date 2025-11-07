import { validateRequiredFields } from "../utils/validate/validateRequiredFields";
import { useBudgetContext } from "../context/quickBudgetContext";
import { validateRiqueridIncome } from "../utils/validate/validateRequiredIncome";
export const useInputHandler = () => {
  const aux = useBudgetContext();

  const handlerOnChangeIncome = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    aux.setIncome(event.target.value );
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
  const handlerOnchangeCategoria =(event:React.ChangeEvent<HTMLSelectElement>)=>{
    aux.setCategory(event.target.value)
  }

  const handlerAddExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateRequiredFields(aux.concept, aux.amountExpense)) return;
    aux.setListItem((prev) => [
      ...prev,
      {
        ...aux ,
        id: Date.now()  
      },
    ]);
    aux.setConcept("")
    aux.setAmountExpense("")
  };
  const handlerAddIncome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   if(!validateRiqueridIncome(aux.income)){
    alert("the field must be a number")
    return
   }else if(aux.income.trim()===""){
    alert("the field is required")
    return
   }
   else{
    alert("Income added successfully")
    }
    aux.setListIncome((prev) => [...prev, aux.income]);
    aux.setIncome("")
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
