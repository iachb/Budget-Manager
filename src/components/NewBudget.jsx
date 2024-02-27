import { useState } from "react";
import PropTypes from "prop-types";
import Message from "./Message";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();
    if (!budget || budget < 1) {
      setMessage("Budget is not valid");
      return;
    }
    setMessage("");
    setIsValidBudget(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label>Define Budget</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Input your budget"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Add" />
        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};

NewBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  setBudget: PropTypes.func.isRequired,
  setIsValidBudget: PropTypes.func.isRequired,
};

export default NewBudget;
