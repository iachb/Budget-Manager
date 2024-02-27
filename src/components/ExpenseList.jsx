import PropTypes from "prop-types";
import Expense from "./Expense";

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <div className="listado-gastos contenedor">
        <h2>{expenses.length ? "Expenses" : "There's no expenses yet"}</h2>
        {expenses.map((expense) => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </div>
    </>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default ExpenseList;
