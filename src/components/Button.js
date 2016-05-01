import React, { PropTypes } from 'react';

const Button = ({ children, onDelete}) => {
  return (
    <button type="submit" className="btn btn-primary" onClick={onDelete}>
    { children }
    </button>
  );
};

Button.defaultName = 'Button';
Button.propTypes = {
  // ...
  children: PropTypes.node,
  deleteCard: PropTypes.func
};
Button.defaultProps = {
  // ...
};

export default Button;
