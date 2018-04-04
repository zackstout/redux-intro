import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'; // destructuring
// same as: 
// import redux from 'redux';
// const createStore = redux.createStore; 

// default params to avoid undefined error
const firstReducer = (state = 0, action) => {
    if (action.type == "BUTTON_ONE") {
        console.log(state);
        console.log('first reducer');
    }
    // Interesting: state refers to whatever this reducer returned the last time it was called!
    return state + 1;
}

const secondReducer = (state, action) => {
    if (action.type == "BUTTON_TWO") {
        console.log('second reducer');
    }
    return 2;
}

const thirdReducer = (state, action) => {
    console.log(action);

    if (action.type == 'ADD_ELEMENT') {
        console.log(`the element was ${action.payload}`);
    }
    return 2;

}

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
