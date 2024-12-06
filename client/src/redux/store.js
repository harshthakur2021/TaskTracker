import {createStore, combineReducers,applyMiddleware} from 'redux'; // combine reducer se combine kr skte ho multiple reducer ko
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { todoReducers } from './todoReducers';

const reducer=  combineReducers({

    todos: todoReducers 
    //todos
})

const middleware=[thunk];
const store= createStore(    // intialize store kr rha as a function
 
    reducer,  
    composeWithDevTools(applyMiddleware(...middleware))               // reducer ek trh action item apko kya kya krna hai...
)
 
export default store;
