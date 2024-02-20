import { budgetPropTypes } from "../utils/propTypes";

const BudgetControl = ({budget, setBudget}) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Graph here</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Budget: 200</span>
        </p>
      </div>
    </div>
  );
};

BudgetControl.propTypes = budgetPropTypes;

export default BudgetControl;
