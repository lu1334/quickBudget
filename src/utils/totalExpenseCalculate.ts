import type { Item } from "../types/types";

export const totalExpenseCalculate = (listItem:Item[]) => {
    const totalExpense = listItem.reduce((acc,item )=> {
      return acc + Number(item.amountExpense)
    },0)
    return totalExpense;
}