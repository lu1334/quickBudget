import { useBudgetContext } from "../../../context/quickBudgetContext";
import { useInputHandler } from "../../../Hooks/useInputsHandlers";
import { useNavigate } from "react-router-dom";
import "../forms.css";

export const FormExpense = () => {
  const navigate = useNavigate();
  const { amountExpense, concept, category, showButton } = useBudgetContext();
  const {
    handlerOnChangeConcept,
    handlerOnChangeAmountExpense,
    handlerAddExpense,
    handlerOnchangeCategoria,
  } = useInputHandler();
  return (
    <form className="qb-form-card" onSubmit={handlerAddExpense}>
      <div className="qb-form-heading">
        <h2>Registra un nuevo gasto</h2>
        <p>Anota cada salida para mantener tu presupuesto bajo control.</p>
      </div>
      <div className="qb-form-group">
        <label className="qb-form-label" htmlFor="category">
          Choose Category:
        </label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={handlerOnchangeCategoria}
        >
          <option value="">-</option>
          <option value="ocio">Ocio</option>
          <option value="deporte">Deporte</option> 
          <option value="salud">Salud</option>
          <option value="alimentos">Alimentos</option>
        </select>
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
          type="text"
          id="amountExpense"
          className="qb-input"
          value={amountExpense}
          placeholder="Ej. 75.50"
          onChange={handlerOnChangeAmountExpense}
        />
      </div>
      {showButton && (
        <button className="qb-submit" type="submit">
          Añadir gasto
        </button>
      )}

      <button
        className="qb-secondary"
        type="button"
        onClick={() => navigate("/")}
      >
        Cancelar
      </button>
    </form>
  );
};
