import { useBudgetContext } from "../../context/quickBudgetContext";
import { formatAmount } from "../../utils/formatAmount";
import { totalIncomeCalculate } from "../../utils/totalCalculate/totalIncomeCalculate";
import { totalExpenseCalculate } from "../../utils/totalCalculate/totalExpenseCalculate";
import { useNavigate } from "react-router-dom";
import { BtnDelete } from "../buttons/btnDelete";
import { useEffect } from "react";
import type { Retorno } from "../../types/types";
import { groupByCategory } from "../../utils/groupByCategory";
import "./ShowItems.css";

export const ShowItems = () => {
  const {
    listItem,
    listIncome,
    setTotalIncome,
    totalIncome,
    setTotalExpenses,
    totalExpenses,
    income
  } = useBudgetContext();

  useEffect(() => {
    const expense = totalExpenseCalculate(listItem);
    setTotalExpenses(expense);

    if (!listIncome || listIncome.length === 0) {
      setTotalIncome(-expense);
      return;
    }

    const arrIncome = listIncome
      .map(Number)
      .filter((n) => Number.isFinite(n) && n > 0);
    const income = totalIncomeCalculate(arrIncome);
    setTotalIncome(income - expense);
  }, [listItem, listIncome, setTotalIncome, setTotalExpenses]);

  const hasItems = listItem.length > 0;
  const navigate = useNavigate();
  const grouped: Retorno = listItem?.length ? groupByCategory(listItem) : {};
  return (
    <section className="qb-list-card">
      <div className="qb-list-heading">
        <h2>Recorded transactions</h2>
        <p>Review your latest incomes and expenses in a single view.</p>
      </div>
      <ul className="qb-list">
        {!hasItems ? (
          <li className="qb-list__empty">
            You have no transactions yet. Add an income or expense to get
            started.
          </li>
        ) : (
          Object.entries(grouped).map(([catg, items]) => (
            <li key={catg} className="qb-list__group">
              <h3>{catg}</h3>
              <ul>
                {items.map((item) => (
                  <li className="qb-list__item" key={item.id}>
                    <span className="qb-list__concept">{item.concept}</span>
                    <div className="qb-list__actions">
                      <span className="qb-list__amount">
                        ${formatAmount(item.amountExpense)}
                      </span>
                      <BtnDelete id={item.id} />
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))
        )}
      </ul>
      <div className="qb-list__total">
        <span>Initial balance: ${formatAmount(String(totalExpenses+totalIncome))}</span>
        <span>Total expense: ${formatAmount(String(totalExpenses))}</span>
        <span>Current balance: ${formatAmount(String(totalIncome))}</span>
      </div>
      <button className="qb-secondary" onClick={() => navigate("/")}>
        Go back
      </button>
    </section>
  );
};
