import PropTypes from "prop-types";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filter Expenses</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">-- All Categories --</option>
            <option value="Savings">Savings</option>
            <option value="Food">Food</option>
            <option value="Home">Home</option>
            <option value="Leisure">Leisure</option>
            <option value="Health">Health</option>
            <option value="Subscription">Subscriptions</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </form>
    </div>
  );
};

Filters.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filters;
