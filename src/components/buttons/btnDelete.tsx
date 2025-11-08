import { useBudgetContext } from "../../context/quickBudgetContext";
import "./btnDelete.css";

type BtnDeleteProps = {
  id: number;
};

export const BtnDelete = ({ id }: BtnDeleteProps) => {
  const { handlerDeleteItem } = useBudgetContext();

  return (
    <button
      type="button"
      className="qb-delete-btn"
      onClick={() => handlerDeleteItem(id)}
      aria-label="Delete transaction"
    >
      Delete
    </button>
  );
};
