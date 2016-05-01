import React, { PropTypes } from 'react';
import ProfileImage from './ProfileImage';
import Button from './Button';


const Card = ({ children, deleteCard, selectCard }) => {
  return (
    <div className="border-box border container col-8 py2">
      <div className="col-2 left px3 py2"><ProfileImage /></div>
      <div className="px1">{ children }</div>
      <div className="col-4 px3">
	      <input type="checkbox" onClick={selectCard} />
	      <Button className="right" onDelete={deleteCard}>Delete</Button>
      </div>
      
    </div>
  );
};

Card.defaultName = 'Card';
Card.propTypes = {
  // ...
  children: PropTypes.node,
  deleteCard: PropTypes.func
};
Card.defaultProps = {
  // ...
};

export default Card;
