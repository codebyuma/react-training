import React, { PropTypes, Component } from 'react';
import Card from './Card.js';
import Button from './Button';


class CardList extends Component {
  constructor(props) {
    super();

    this.state = {
      people: [{
        id: 1,
        name: 'Jane React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 2,
        name: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 3,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }],
      selected: []
    };
  }


  componentDidMount() {
    console.info('CardList successfully mounted.');
  }

  deleteCard = (person) => {
    this.setState({
      people: this.state.people.filter((_person) => {
        return _person.id!=person.id;
      })
    });
  };

  deleteSelected = () => {
    let selectedPeople = this.state.selected;
    this.setState({
      people: this.state.people.filter((person) => !selectedPeople.includes(person)),
      selected: []
    })

  }

  addToSelected = (person) => {
    let selectedPeople = this.state.selected;
    if (!selectedPeople.includes(person)){
      selectedPeople = selectedPeople.concat(person);
      
    } else {
      selectedPeople = selectedPeople.filter((_person) => person.id != _person.id);
    }

    this.setState({
        selected: selectedPeople
    });
  }

  render() {
    return (
      <div className="col-12">
      <h2 className="center">There {this.state.people.length != 1 ? 'are' : 'is'} {this.state.people.length} {this.state.people.length != 1 ? 'people' : 'person'}:</h2>
       <p className="center"><Button className="right" onDelete={this.deleteSelected.bind(null)}>Clear all selected</Button></p>
       <ul>
        {this.state.people.map((person) => {
           return <Card key={person.id} deleteCard={this.deleteCard.bind(null, person)} selectCard={this.addToSelected.bind(null, person)}><h1>{person.name}</h1>
                    <p>{person.description}</p>
                  </Card>;
        })}
      </ul>
      </div>
    );
  }
}


CardList.propTypes = {
  /**
   * The initial state of the liked value
   */
  people: PropTypes.array,
};
CardList.defaultProps = {
};

export default CardList;
