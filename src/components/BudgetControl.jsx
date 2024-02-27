import {useEffect} from "react";
import PropTypes from "prop-types";

const BudgetControl = ({expenses, budget}) => {

  useEffect(() => {
    console.log(expenses);
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
          <span>Available: </span> {formatQuantity(0)}
        </p>
        <p>
          <span>Spent: </span> {formatQuantity(0)}
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
