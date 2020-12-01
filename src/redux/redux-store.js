import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import   thunkMiddleware from 'redux-thunk';
import imgReducer from "./imgReducer";

function saveToLocalStorage(state) {
  try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try{
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}


let reducers = combineReducers({
  imagesPage: imgReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const store = createStore(reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunkMiddleware)));

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;
