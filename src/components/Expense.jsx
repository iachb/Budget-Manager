import { expensesPropTypes } from "../utils/propTypes";
import { formatDate } from "../utils";

const Expense = ({ expense }) => {
  const { category, name, date, amount, id } = expense;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{category}</p>
          <p className="nombre-gasto">{name}</p>
          <p className="fecha-gasto">
            Agregado el: {""}
            <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto"> ${amount}</p>
    </div>
  );
};

Expense.propTypes = expensesPropTypes;

export default Expense;
