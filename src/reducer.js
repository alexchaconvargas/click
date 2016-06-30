import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function increment(state, level) {
  const character = state.get('character');
  const cosmos = character.get('cosmos');
  const newChar = character.set('cosmos', cosmos + level);
  const newState = state.set('character', newChar);
  return newState;
}

function levelUp(state, action) {
  const character = state.get('character');
  const price = character.get('price');
  const cosmos = character.get('cosmos');
  const level = character.get('level');
  const newChar = character.set('cosmos', cosmos - price)
                           .set('level', level + 1)
                           .set('price', price + price);
  const newState = state.set('character', newChar);
  return newState;
}


export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'INCREMENT':
      return increment(state, action.level);
    case 'LEVEL_UP':
      return levelUp(state, action);
  }
  return state;
}