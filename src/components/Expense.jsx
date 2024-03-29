import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import PropTypes from "prop-types";
import { formatDate } from "../utils";
import savingsIcon from "../img/icono_ahorro.svg";
import homeIcon from "../img/icono_casa.svg";
import foodIcon from "../img/icono_comida.svg";
import otherIcon from "../img/icono_gastos.svg";
import leisureIcon from "../img/icono_ocio.svg";
import healthIcon from "../img/icono_salud.svg";
import subscriptionIcon from "../img/icono_suscripciones.svg";

const iconDiccionary = {
  Savings: savingsIcon,
  Home: homeIcon,
  Food: foodIcon,
  Other: otherIcon,
  Leisure: leisureIcon,
  Health: healthIcon,
  Subscription: subscriptionIcon,
};

const Expense = ({ expense, setEditExpense, deleteExpense }) => {
  const { category, name, date, quantity, id } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpense(expense)}>Edit</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={iconDiccionary[category]} alt="icon" />
            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="fecha-gasto">
                Agregado el: {""}
                <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto"> ${quantity}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

Expense.propTypes = {
  expense: PropTypes.object.isRequired,
  setEditExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default Expense;
