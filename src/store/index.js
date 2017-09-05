import { createStore } from 'redux';

//start by setting state. Set up all variables.
const initialState = {
  inputValue: '',
  list: []
}

//next, reducer function
const reducer = (state = initialState, action) => {
  console.log('reducer', action);

//this concat will add things to the list in state.
//submit : reset imput value, add item to list.
//INPUT_CHANGE: handles the input text. make the text the value of input.
  switch(action.type) {
    case "SUBMIT":
      return Object.assign({}, state, { inputValue: '', list : state.list.concat([action.text]) });
    case "INPUT_CHANGE":
      return Object.assign({}, state, {inputValue : action.text})
  }

  return state;
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

export default store;
