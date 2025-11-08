import { useState, createContext, useContext } from "react";
import type { Item, QuickBudgetContextType } from "../types/types";

export const QuickBudgetContext = createContext<
  QuickBudgetContextType | undefined
>(undefined);

export const QuickBudgetProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [income, setIncome] = useState<string>("");
  const [amountExpense, setAmountExpense] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [concept, setConcept] = useState<string>("");
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [listItem, setListItem] = useState<Item[]>([]);
  const [listIncome, setListIncome] = useState<string[]>([]);

  const handlerDeleteItem = (id: number) => {
    setListItem((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <QuickBudgetContext.Provider
      value={{
        showButton,
        setShowButton,
        income,
        setIncome,
        amountExpense,
        setAmountExpense,
        category,
        setCategory,
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
  const context = useContext(QuickBudgetContext);
  if (!context) {
    throw new Error(
      "useBudgetContext must be used within a QuickBudgetProvider"
    );
  }
  return context;
};
