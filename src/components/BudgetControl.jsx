import {useState, useEffect} from "react";
import PropTypes from "prop-types";

const BudgetControl = ({expenses, budget}) => {

  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => total + expense.quantity,
      0
    );
    
    const totalAvailable = budget - totalSpent;

    setAvailable(totalAvailable);
    setSpent(totalSpent);
  }, [expenses]);

  const formatQuantity = (quantity) => {
    return quantity.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Graph here</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Budget: </span> {formatQuantity(budget)}
        </p>
        <p>
          <span>Available: </span> {formatQuantity(available)}
        </p>
        <p>
          <span>Spent: </span> {formatQuantity(spent)}
        </p>
      </div>
    </div>
  );
};

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.array.isRequired,
};

export default BudgetControl;
