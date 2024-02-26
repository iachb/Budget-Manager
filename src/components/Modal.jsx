import CloseBtn from "../img/cerrar.svg";
import { modalPropTypes } from "../utils/propTypes";

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const hideModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="close-modal" onClick={hideModal} />
      </div>
      <form className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
        <legend>New Expense</legend>
        <div className="campo">
          <label htmlFor="Name">Name</label>
          <input id="name" type="text" placeholder="Input your expense name" />
        </div>
        <div className="campo">
          <label htmlFor="Quantity">Quantity</label>
          <input
            id="quantity"
            type="text"
            placeholder="Input your expense quantity"
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Category</label>
          <select id="category">
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
        <input type="submit" value="Add Expense" />
      </form>
    </div>
  );
};

Modal.propTypes = modalPropTypes;

export default Modal;
