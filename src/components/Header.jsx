import PropTypes from "prop-types";
import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

const Header = ({
  expenses,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <header>
      <h1>Budget Manager</h1>
      {isValidBudget ? (
        <BudgetControl expenses={expenses} budget={budget} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  expenses: PropTypes.array.isRequired,
  budget: PropTypes.number.isRequired,
  setBudget: PropTypes.func.isRequired,
  isValidBudget: PropTypes.bool.isRequired,
  setIsValidBudget: PropTypes.func.isRequired,
};

export default Header;
