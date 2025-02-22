const redux = require('redux');

const INITIAL_VALUE = {
  counter: 0
};

// Reducer function
const reducer = (state = INITIAL_VALUE, action) => {
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + 1 };
  }else if(action.type === 'DECREMENT'){
    return { counter: state.counter - 1 };
  }else if(action.type === 'ADDITION'){
    return { counter: state.counter + action.payload.number};
  }
  return state; // Always return state if no action matches
};

// Create Redux store
const store = redux.createStore(reducer);

// Subscriber function
const subscriber = () => {
  const currentState = store.getState(); // Use a different variable name
  console.log(currentState);
};

// Subscribe to store updates
store.subscribe(subscriber);

// Dispatch an action
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADDITION', payload: {number: 7} });
store.dispatch({ type: 'DECREMENT' });

