import React, { PropTypes } from 'react';

const Button = ({ children, callBack}) => {
  return (
    <button type="submit" className="btn btn-primary" onClick={callBack}>
    { children }
    </button>
  );
};

Button.defaultName = 'Button';
Button.propTypes = {
  // ...
  children: PropTypes.node,
  callBack: PropTypes.func
};
Button.defaultProps = {
  // ...
};

export default Button;
