import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'; // destructuring
// same as: 
// import redux from 'redux';
// const createStore = redux.createStore; 

// All reducers bundled up, and *each* is hit every time an action occurs, stored in our store:
// default params to avoid undefined error
const firstReducer = (state = 0, action) => {
    if (action.type == "BUTTON_ONE") {
        console.log(state);
        console.log('first reducer');
        return state + 1;
    }
    // Interesting: state refers to whatever this reducer returned the last time it was called!
    return state;
}

const secondReducer = (state=1000, action) => {
    if (action.type == "BUTTON_TWO") {
        console.log('second reducer');
        return state - 1;
    }
    return state;
}

const thirdReducer = (state = [], action) => {
    console.log(action);

    switch (action.type) {
        case 'ADD_ELEMENT':
            // No! use spread! Immutability!
            // state.push(action.payload);
            return [...state, action.payload];
        default:
            return state;
    }
}

// this store is updated by reducers, and it controls every state, which control the DOM:
const storeInstance = createStore(
    // A reducer is a function that runs every time an action is dispatched:
    combineReducers({
        // Wow, nice aspect of ES6 to avoid duplication:
        firstReducer,
        secondReducer,
        thirdReducer
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
