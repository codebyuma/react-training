import React, { PropTypes, Component } from 'react';
import Button from './Button';


class AddProfile extends Component {  

	constructor(props){
		super();
		this.addProfile = props.addProfile;
		this.state = {
			name: '',
			description: ''
		};
	}

	updateName = (event) => {
   	 	this.setState({name: event.target.value});
  	};

  	updateDescription = (event) => {
   	 	this.setState({description: event.target.value});
  	};

  	addPerson = () => {
  		this.addProfile(this.state.name, this.state.description);
  	}
	
	render (){
	  return (
	    <div >
	      <div className="center col-12">
		      <label className="px2">Name:</label> <input type="input" value={this.state.input} onChange={this.updateName} /> 
		      <label className="px2">Description:</label> <input type="input" value={this.state.description} onChange={this.updateDescription}/>
		      <p className="py2"><Button callBack={this.addPerson}>Add Person</Button></p>
	      </div>
	      
	    </div>
	  );
	}
};

AddProfile.propTypes = {
  // ...
  addProfile: PropTypes.func
};
AddProfile.defaultProps = {
  // ...
};

export default AddProfile;
