import PropTypes from "prop-types";
import Expense from "./Expense";

const ExpenseList = ({ expenses, setEditExpense }) => {
  return (
    <>
      <div className="listado-gastos contenedor">
        <h2>{expenses.length ? "Expenses" : "There's no expenses yet"}</h2>
        {expenses.map((expense) => (
          <Expense
            key={expense.id}
            expense={expense}
            setEditExpense={setEditExpense}
          />
        ))}
      </div>
    </>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
  setEditExpense: PropTypes.func.isRequired,
};

export default ExpenseList;
