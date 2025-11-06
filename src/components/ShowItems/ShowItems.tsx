import { useBudgetContext } from "../../context/quickBudgetContext";
import { formatAmount } from "../../utils/formatAmount";
import "./ShowItems.css";

export const ShowItems = () => {
  const { listItem } = useBudgetContext();

  const hasItems = listItem.length > 0;

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
    </section>
  );
};
