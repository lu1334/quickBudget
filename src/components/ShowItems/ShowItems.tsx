import { useBudgetContext } from "../../context/quickBudgetContext";
import { formatAmount } from "../../utils/formatAmount";
import { totalExpenseCalculate } from "../../utils/totalExpenseCalculate";
import { useNavigate } from "react-router-dom";
import "./ShowItems.css";

export const ShowItems = () => {
  const { listItem,listIncome,setTotalIncome ,totalIncome} = useBudgetContext();
  setTotalIncome(totalExpenseCalculate(listItem,listIncome.toString().split(",").map(Number)));
  const hasItems = listItem.length > 0;
  const naviga = useNavigate();
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
          listItem.map((item) => (
            <li className="qb-list__item" key={item.id}>
              <span className="qb-list__concept">{item.concept}</span>
              <span className="qb-list__amount">
                ${formatAmount(item.amountExpense)}
              </span>
            </li>
          ))
        )}
      </ul>
      <div className="qb-list__total">
        <span>Saldo total:</span>
        <span>${formatAmount(String(totalIncome))}</span>
      </div>
      <button className="qb-secondary" onClick={() => naviga("/")}>
        Volver
      </button>
    </section>
  );
};
