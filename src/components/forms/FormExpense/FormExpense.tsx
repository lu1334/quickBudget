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
        <h2>Register a new expense</h2>
        <p>Track each outflow to keep your budget under control.</p>
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
          <option value="leisure">Leisure</option>
          <option value="fitness">Fitness</option>
          <option value="health">Health</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
      <div className="qb-form-group">
        <label className="qb-form-label" htmlFor="concept">
          Concept
        </label>
        <input
          type="text"
          id="concept"
          className="qb-input"
          value={concept}
          placeholder="e.g. Grocery run"
          onChange={handlerOnChangeConcept}
        />
      </div>
      <div className="qb-form-group">
        <label className="qb-form-label" htmlFor="amountExpense">
          Amount
        </label>
        <input
          type="text"
          id="amountExpense"
          className="qb-input"
          value={amountExpense}
          placeholder="e.g. 75.50"
          onChange={handlerOnChangeAmountExpense}
        />
      </div>
      {showButton && (
        <button className="qb-submit" type="submit">
          Add expense
        </button>
      )}

      <button
        className="qb-secondary"
        type="button"
        onClick={() => navigate("/")}
      >
        Cancel
      </button>
    </form>
  );
};
