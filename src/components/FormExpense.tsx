import { useBudgetContext } from "../context/quickBudgetContext";
import { useInputHandler } from "../Hooks/useInputsHandlers";
import "./forms.css";
export const Form = () => {
  const { amountExpense, concept } = useBudgetContext();
  const { handlerOnChangeConcept, handlerOnChangeAmountExpense, handlerAdd } =
    useInputHandler();
  return (
    <form className="qb-form-card" onSubmit={handlerAdd}>
      <div className="qb-form-heading">
        <h2>Registra un nuevo gasto</h2>
        <p>Anota cada salida para mantener tu presupuesto bajo control.</p>
      </div>
      <div className="qb-form-group">
        <label className="qb-form-label" htmlFor="concept">
          Concepto
        </label>
        <input
          type="text"
          id="concept"
          className="qb-input"
          value={concept}
          placeholder="Ej. Compra supermercado"
          onChange={handlerOnChangeConcept}
        />
      </div>
      <div className="qb-form-group">
        <label className="qb-form-label" htmlFor="amountExpense">
          Importe
        </label>
        <input
          type="number"
          id="amountExpense"
          className="qb-input"
          value={amountExpense}
          placeholder="Ej. 75.50"
          onChange={handlerOnChangeAmountExpense}
        />
      </div>
      <button className="qb-submit" type="submit">
        Añadir gasto
      </button>
    </form>
  );
};
