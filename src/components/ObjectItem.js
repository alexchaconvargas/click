import React from 'react';

export default class ObjectItem extends React.Component {
  render() {
    return <div>
    {this.props.get('name')}
    </div>
  }
};