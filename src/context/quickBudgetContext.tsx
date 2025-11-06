import { useState, createContext, useContext } from "react";
import type { Item, QuickBudgetContextType } from "../types/types";
import { validateRequiredFields } from "../utils/validateRequiredFields";
export const QuickBudgetContext = createContext<
  QuickBudgetContextType | undefined
>(undefined);

export const QuickBudgetProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [income, setIncome] = useState<number>(0);
  const [amountExpense, setAmountExpense] = useState<number>(0);
  const [concept, setConcept] = useState<string>("");
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [listItem, setListItem] = useState<Item[]>([]);
  const [listIncome, setListIncome] = useState<number[]>([]);

  // const handlerOnChangeIncome = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setIncome(Number(event.target.value));
  // };
  // const handlerOnChangeAmountExpense = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setAmountExpense(Number(event.target.value));
  // };
  // const handlerOnChangeConcept = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setConcept(event.target.value);
  // };
  // const handlerAdd = (e:React.FormEvent<HTMLFormElement>) => {
  //   if(!validateRequiredFields(concept,amountExpense))return
  //   e.preventDefault();
  //   setListItem((prev) => [
  //     ...prev,
  //     { id: Date.now(), concept, amountExpense },
  //   ]);
  // };
  // const handlerAddIncome = (e:React.FormEvent<HTMLFormElement>)=>{
  //     e.preventDefault()
  //     setListIncome(prev=>([...prev,income]))
  // }
  const handlerDeleteItem = (id: number) => {
    setListItem((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <QuickBudgetContext.Provider
      value={{
        income,
        setIncome,
        amountExpense,
        setAmountExpense,
        concept,
        setConcept,
        totalIncome,
        setTotalIncome,
        totalExpenses,
        setTotalExpenses,
        listItem,
        setListItem,
        listIncome,
        setListIncome,
        handlerDeleteItem,
      }}
    >
      {children}
    </QuickBudgetContext.Provider>
  );
};

export const useBudgetContext = () => {
  const context = useContext(QuickBudgetContext) ;
  if (!context) {
    throw new Error(
      "useBudgetContext must be used within a QuickBudgetProvider"
    );
  }
  return context;
}
