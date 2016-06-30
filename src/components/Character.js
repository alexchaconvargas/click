import React from 'react';

export default class Character extends React.Component {
  constructor(props){
	super(props);
  }
  getLevel() {
    if (this.props.character.get('cosmos') > this.props.character.get('price') ) {
    	this.props.levelup();
    }
  }
  render() {
    return <div>
    {this.props.character.get('cosmos')} , {this.props.character.get('level')}
    <button onClick={() => this.props.increment(this.props.character.get('level'))}> generate </button>
    <button onClick={() => this.getLevel()}> lvl up ({this.props.character.get('price')}) </button>
    </div>
  }
};