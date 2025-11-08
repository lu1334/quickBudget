import { useBudgetContext } from "../../context/quickBudgetContext";
import { formatAmount } from "../../utils/formatAmount";
import { totalIncomeCalculate } from "../../utils/totalCalculate/totalIncomeCalculate";
import { totalExpenseCalculate } from "../../utils/totalCalculate/totalExpenseCalculate";
import { useNavigate } from "react-router-dom";
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
  } = useBudgetContext();

  useEffect(() => {
    if (!listIncome || listIncome.length === 0) return;
    const income = totalIncomeCalculate(
      listItem,
      listIncome.toString().split(",").map(Number)
    );
    const expense = totalExpenseCalculate(listItem);
    if (income !== undefined && income) setTotalIncome(income);
    setTotalExpenses(expense);
  }, [listItem, listIncome, setTotalIncome, setTotalExpenses]);

  const hasItems = listItem.length > 0;
  const navigate = useNavigate();
  const grouped: Retorno = listItem?.length ? groupByCategory(listItem) : {};
  return (
    <section className="qb-list-card">
      <div className="qb-list-heading">
        <h2>Movimientos registrados</h2>
        <p>Revisa tus ingresos y gastos recientes en un solo lugar.</p>
      </div>
      <ul className="qb-list">
        {!hasItems ? (
          <li className="qb-list__empty">
            Aún no registras movimientos. Añade un ingreso o gasto para
            comenzar.
          </li>
        ) : (
          Object.entries(grouped).map(([catg, items]) => (
            <li key={catg} className="qb-list__group">
              <h3>{catg}</h3>
              <ul>
                {items.map((item) => (
                  <li className="qb-list__item" key={item.id}>
                    <span className="qb-list__concept">{item.concept}</span>
                    <span className="qb-list__amount">
                      ${formatAmount(item.amountExpense)}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))
        )}
      </ul>
      <div className="qb-list__total">
        <span>Total Gasto: ${formatAmount(String(totalExpenses))}</span>
        <span>Saldo actual: ${formatAmount(String(totalIncome))}</span>
      </div>
      <button className="qb-secondary" onClick={() => navigate("/")}>
        Volver
      </button>
    </section>
  );
};
