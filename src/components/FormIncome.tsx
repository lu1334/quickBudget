import { useInputHandler } from "../Hooks/useInputsHandlers";
import { useBudgetContext } from "../context/quickBudgetContext";
import "./forms.css";
export const FormIncome = () => {
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
    </form>
  );
};
