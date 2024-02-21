import { budgetPropTypes } from "../utils/propTypes";

const BudgetControl = ({ budget, setBudget }) => {

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

BudgetControl.propTypes = budgetPropTypes;

export default BudgetControl;
