import { budgetPropTypes } from "../utils/propTypes";
import NewBudget from "./NewBudget";

const Header = ({ budget, setBudget }) => {
  return (
    <header>
      <h1>Budget Manager</h1>
      <NewBudget budget={budget} setBudget={setBudget} />
    </header>
  );
};

Header.propTypes = budgetPropTypes;

export default Header;
