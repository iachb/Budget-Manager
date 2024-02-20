import { childrenPropTypes } from "../utils/propTypes";

const Message = ({ children, type }) => {
  return <div className={`alerta ${type}`}>{children}</div>;
};

Message.propTypes = childrenPropTypes;

export default Message;
