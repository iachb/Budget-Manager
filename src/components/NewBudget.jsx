import React from "react";

const NewBudget = ({budget, setBudget}) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Define Budget</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Input your budget"
            value={budget}
            onChange={(e) => setBudget(parseInt(e.target.value, 10))}
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default NewBudget;
