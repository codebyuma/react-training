import React, { PropTypes } from 'react';
import Card from './Card.js';
import Button from './Button';


const CardList = ({ people, deleteCard, onDelete, selectCard }) => {
 
    return (
      <div className="col-12">
      <h2 className="center">There {people.length != 1 ? 'are' : 'is'} {people.length} {people.length != 1 ? 'people' : 'person'}:</h2>
       <p className="center"><Button className="right" callBack={onDelete}>Clear all selected</Button></p>
       <ul>
        {people.map((person) => {
           return <Card key={person.id} deleteCard={deleteCard.bind(null, person)} selectCard={selectCard.bind(null, person)}><h1>{person.name}</h1>
                    <p>{person.description}</p>
                  </Card>;
        })}
      </ul>
      </div>
    );
};

CardList.defaultName = 'CardList';

CardList.propTypes = {
  /**
   * The initial state of the liked value
   */
  people: PropTypes.array,
  deleteCard: PropTypes.func,
  onDelete: PropTypes.func,
  selectCard: PropTypes.func
};

CardList.defaultProps = {
};

export default CardList;
