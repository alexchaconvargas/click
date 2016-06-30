import React from 'react';
import {connect} from 'react-redux';
import Character from './Character';
import ObjectList from './ObjectList';
import Visor from './Visor';
import * as actionCreators from '../action_creators';

export default class App extends React.Component {
  render() {
    return <div>
    <Character  character={this.props.character}
                increment={this.props.increment}
                levelup={this.props.levelup}/>
    <ObjectList objects={this.props.objects}/>
    <Visor />
    </div>
  }
};

function mapStateToProps(state) {
  return {
    character: state.get('character'),
    objects: state.get('objects')
  };
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);