import CloseBtn from "../img/cerrar.svg";
import { modalPropTypes } from "../utils/propTypes";

const Modal = ({ setModal }) => {
  const hideModal = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="close-modal" onClick={hideModal} />
      </div>
    </div>
  );
};

Modal.propTypes = modalPropTypes;

export default Modal;
