import type React from "react";


export interface QuickBudgetContextType {
    income: string;
    amountExpense: string;
    concept: string;
    totalIncome: number;
    totalExpenses: number;
    listItem: Item[];
    listIncome:string[];
    setListItem: React.Dispatch<React.SetStateAction<Item[]>>;

    setIncome: React.Dispatch<React.SetStateAction<string>>;
    setListIncome:React.Dispatch<React.SetStateAction<string[]>>
    setAmountExpense: React.Dispatch<React.SetStateAction<string>>;
    setConcept: React.Dispatch<React.SetStateAction<string>>;
    setTotalIncome: React.Dispatch<React.SetStateAction<number>>;
    setTotalExpenses: React.Dispatch<React.SetStateAction<number>>;

    handlerDeleteItem: (id: number) => void;
   
}

export interface Item {
    id: number;
    category:string
    concept: string;
    amountExpense: string;
    state?: boolean;
}

export type ItemIncome = {
    id:number,
    income:string
}

export type Retorno = Record<string,Item[]>