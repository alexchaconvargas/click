import React from 'react';
import ReactDOM from 'react-dom';

import {List, Map} from 'immutable';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {AppContainer} from './components/App'

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

// We dispatch the SET_STATE action holding the desired state
store.dispatch({
  type: 'SET_STATE',
  state: {
    character: {cosmos: 0, level: 1, price: 10},
    objects: [{name: "square", price : 5, health : 1, prize: 10, level: 1},
    		  {name: "cube", price : 15, health : 5, prize: 30, level: 1}]
  }
});

ReactDOM.render(
  <Provider store={store}>
 	 <AppContainer />
  </Provider>,
  document.getElementById('app')
);