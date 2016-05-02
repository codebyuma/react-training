import React, { PropTypes, Component } from 'react';
import CardList from './CardList.js';
import AddProfile from './AddProfile.js';


class App extends Component {
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
    console.info('App successfully mounted.');
  }; 


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

  addPerson = (name, description) => {
  	let newPerson = {
  		name: name,
  		description: description,
  		id: this.state.people.length+1
  	}

  	this.setState({
  		people: this.state.people.concat(newPerson)
  	});
  };

  render() {
    return (
      <div className="col-12">
      	<CardList people={this.state.people} onDelete={this.deleteSelected.bind(null)} deleteCard={this.deleteCard.bind(null)} selectCard={this.addToSelected.bind(null)} />
      	<AddProfile addProfile={this.addPerson.bind(null)} />
      </div>
    );
  }
}


App.propTypes = {
  /**
   * The initial state of the liked value
   */

};
App.defaultProps = {
};

export default App;
