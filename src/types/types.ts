import type React from "react";


export interface QuickBudgetContextType {
    income: number;
    amountExpense: number;
    concept: string;
    totalIncome: number;
    totalExpenses: number;
    listItem: Item[];
    listIncome:number[];
    setListItem: React.Dispatch<React.SetStateAction<Item[]>>;

    setIncome: React.Dispatch<React.SetStateAction<number>>;
    setListIncome:React.Dispatch<React.SetStateAction<number[]>>
    setAmountExpense: React.Dispatch<React.SetStateAction<number>>;
    setConcept: React.Dispatch<React.SetStateAction<string>>;
    setTotalIncome: React.Dispatch<React.SetStateAction<number>>;
    setTotalExpenses: React.Dispatch<React.SetStateAction<number>>;

    handlerDeleteItem: (id: number) => void;
   
}

export interface Item {
    id: number;
    concept: string;
    amountExpense: number;
    state?: boolean;
}

export type ItemIncome = {
    id:number,
    income:number
}
