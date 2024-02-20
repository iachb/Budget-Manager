import { budgetPropTypes } from "../utils/propTypes";
const NewBudget = ({ budget, setBudget }) => {

  const handleBudget = (e) => {
    e.prevent.Default();
    setBudget(parseInt(e.target.value, 10));
  };
  
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
        <input type="submit" value="Add" onClick={handleBudget}/>
      </form>
    </div>
  );
};

NewBudget.propTypes = budgetPropTypes;

export default NewBudget;
