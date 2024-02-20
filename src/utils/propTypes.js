import PropTypes from "prop-types";

export const budgetPropTypes = {
  budget: PropTypes.number.isRequired,
  setBudget: PropTypes.func.isRequired,
};

export const childrenPropTypes = {
  children: PropTypes.node.isRequired,
};
