
import type{ Item } from "../types/types"
import { totalExpenseCalculate } from "./totalExpenseCalculate"

export const totalIncomeCalculate = (listItem:Item[],arrIncome:number[]) => {
      const totalExpense = totalExpenseCalculate(listItem)
      const totalIncome = (arrIncome.reduce((a,b) => a + b, 0))
      if(totalIncome < totalExpense ){
        alert("the expenses exceed the income")
        return
      }
      return totalIncome - totalExpense
}