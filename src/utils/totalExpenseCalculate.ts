import type{ Item } from "../types/types"

export const totalExpenseCalculate = (listItem:Item[],arrIncome:number[]) => {
    
      const totalExpense = listItem.reduce((acc,item )=> {
        return acc + Number(item.amountExpense)
      },0)
      return (arrIncome.reduce((a,b) => a + b, 0) - totalExpense)
}