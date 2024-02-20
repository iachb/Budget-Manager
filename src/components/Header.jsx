import { budgetPropTypes } from "../utils/propTypes";
import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Budget Manager</h1>
      {isValidBudget ? (
        <BudgetControl budget={budget} setBudget={setBudget}/>
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

Header.propTypes = budgetPropTypes;

export default Header;
