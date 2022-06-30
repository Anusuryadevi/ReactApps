import { combineReducers,  applyMiddleware } from "redux";
import hoverReducer from "./reducer/HoverReducer";
import { configureStore } from '@reduxjs/toolkit'; 
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = () => ( combineReducers({
//     user: hoverReducer,
// }));

// console.log(rootReducer);
// const store = configureStore({reducer : rootReducer})
// const store = createStore(rootReducer)
// const store = createStore(rootReducer, applyMiddleware(thunk)
// +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );


// const store = createStore(rootReducer, {user: {}}, composeWithDevTools(
//     applyMiddleware(thunk)))

const store = configureStore({
    reducer: hoverReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })


export default store;