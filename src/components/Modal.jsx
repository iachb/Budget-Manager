import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import CloseBtn from "../img/cerrar.svg";

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
  editExpense,
  setEditExpense,
}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setName(editExpense.name);
      setQuantity(editExpense.quantity);
      setCategory(editExpense.category);
      setId(editExpense.id);
      setDate(editExpense.date);
    }
  }, []);

  const hideModal = () => {
    setAnimateModal(false);
    setEditExpense({});
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || quantity === "" || category === "") {
      setMessage("All fields are required");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    saveExpense({ name, quantity, category, id, date });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="close-modal" onClick={hideModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
      >
        <legend>{editExpense.name ? "Edit Expense" : "New Expense"} </legend>
        {message && <Message type="error">{message}</Message>}
        <div className="campo">
          <label htmlFor="Name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Input your expense name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="Quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            placeholder="Input your expense quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Select one --</option>
            <option value="Savings">Savings</option>
            <option value="Food">Food</option>
            <option value="Home">Home</option>
            <option value="Leisure">Leisure</option>
            <option value="Health">Health</option>
            <option value="Subscription">Subscriptions</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <input
          type="submit"
          value={editExpense.name ? "Save Changes" : "Add Expense"}
        />
      </form>
    </div>
  );
};

Modal.propTypes = {
  setModal: PropTypes.func.isRequired,
  animateModal: PropTypes.bool.isRequired,
  setAnimateModal: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.object,
  setEditExpense: PropTypes.func.isRequired,
};

export default Modal;
