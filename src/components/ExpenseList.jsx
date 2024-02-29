import PropTypes from "prop-types";
import Expense from "./Expense";

const ExpenseList = ({
  expenses,
  setEditExpense,
  deleteExpense,
  filter,
  filteredExpenses,
}) => {
  return (
    <>
      <div className="listado-gastos contenedor">
        {filter ? (
          <>
            <h2>
              {filteredExpenses.length
                ? "Expenses"
                : "There's no expenses yet in this category"}
            </h2>
            {filteredExpenses.map((expense) => (
              <Expense
                key={expense.id}
                expense={expense}
                setEditExpense={setEditExpense}
                deleteExpense={deleteExpense}
              />
            ))}
          </>
        ) : (
          <>
            <h2>
              {expenses.length
                ? "Expenses"
                : "There's no expenses yet"}
            </h2>
            {expenses.map((expense) => (
              <Expense
                key={expense.id}
                expense={expense}
                setEditExpense={setEditExpense}
                deleteExpense={deleteExpense}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
  setEditExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filteredExpenses: PropTypes.array.isRequired,
};

export default ExpenseList;
