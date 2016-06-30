import React from 'react';

import ObjectItem from './ObjectItem'

export default class ObjectList extends React.Component {
  constructor(props){
	super(props);
  }
  render() {
  	console.log(this.props);
    return <div>
    {this.props.objects.map(item =>
          <ObjectItem key={item.get('name')}
          			  name={item.get('name')}/>
        )}
    </div>
  }
};