import { useInputHandler } from "../../../Hooks/useInputsHandlers";
import { useBudgetContext } from "../../../context/quickBudgetContext";
import { useNavigate } from "react-router-dom";
import "../forms.css";
export const FormIncome = () => {
  const navigate = useNavigate();
  const { handlerOnChangeIncome, handlerAddIncome } = useInputHandler();
  const { income } = useBudgetContext();
  return (
    <form className="qb-form-card" onSubmit={handlerAddIncome}>
      <div className="qb-form-heading">
        <h2>Registra un ingreso</h2>
        <p>Actualiza tu presupuesto sumando cada nuevo ingreso fácilmente.</p>
      </div>
      <div className="qb-form-group">
        <label className="qb-form-label" htmlFor="income">
          Importe
        </label>
        <input
          type="text"
          id="income"
          className="qb-input"
          value={income}
          placeholder="Ej. 1200.00"
          onChange={handlerOnChangeIncome}
        />
      </div>
      <button className="qb-submit" type="submit">
        Añadir ingreso
      </button>
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
