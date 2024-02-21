import PropTypes from "prop-types";

export const budgetPropTypes = {
  budget: PropTypes.number.isRequired,
  setBudget: PropTypes.func.isRequired,
  isValidBudget: PropTypes.bool.isRequired,
  setIsValidBudget: PropTypes.func.isRequired,
};

export const childrenPropTypes = {
  children: PropTypes.node.isRequired,
};

export const modalPropTypes = {
  setModal: PropTypes.func.isRequired,
};