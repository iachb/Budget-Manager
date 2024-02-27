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
import expensesIcon from "../img/icono_gastos.svg";
import leisureIcon from "../img/icono_ocio.svg";
import healthIcon from "../img/icono_salud.svg";
import subscriptionsIcon from "../img/icono_suscripciones.svg";

const iconDiccionary = {
  Savings: savingsIcon,
  Home: homeIcon,
  Food: foodIcon,
  Expenses: expensesIcon,
  Leisure: leisureIcon,
  Health: healthIcon,
  Subscriptions: subscriptionsIcon,
};

const Expense = ({ expense }) => {
  const { category, name, date, quantity } = expense;
  return (
    <SwipeableList>
      <SwipeableListItem>
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
};

export default Expense;
