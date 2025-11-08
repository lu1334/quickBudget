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
        <h2>Register an income</h2>
        <p>Keep your budget up to date by logging every new inflow.</p>
      </div>
      <div className="qb-form-group">
        <label className="qb-form-label" htmlFor="income">
          Amount
        </label>
        <input
          type="text"
          id="income"
          className="qb-input"
          value={income}
          placeholder="e.g. 1200.00"
          onChange={handlerOnChangeIncome}
        />
      </div>
      <button className="qb-submit" type="submit">
        Add income
      </button>
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
