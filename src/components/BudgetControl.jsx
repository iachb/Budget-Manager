import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({ expenses, setExpenses, budget, setBudget, setIsValidBudget }) => {
  const [percentage, setPercentage] = useState(10);
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => total + expense.quantity,
      0
    );
    const totalAvailable = budget - totalSpent;

    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );

    setAvailable(totalAvailable);
    setSpent(totalSpent);
    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1500);
  }, [expenses]);

  const handleResetApp = () => {
    const result = confirm("Are you sure you want to reset the app?");

    if (result) {
      setBudget(0);
      setExpenses([]);
      setIsValidBudget(false);
    }
  };

  const formatQuantity = (quantity) => {
    return quantity.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: percentage > 100 ? "#DC2626" : "#3B82F6",
          })}
          value={percentage}
          text={`${percentage}% Spent`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button
          className="reset-app"
          type="button"
          onClick={handleResetApp}
        >
          Reset
        </button>
        <p>
          <span>Budget: </span> {formatQuantity(budget)}
        </p>
        <p className={`${available < 0 ? "negativo" : ""}`}>
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
  setBudget: PropTypes.func.isRequired,
  setIsValidBudget: PropTypes.func.isRequired,
  expenses: PropTypes.array.isRequired,
  setExpenses: PropTypes.func.isRequired,
};

export default BudgetControl;
