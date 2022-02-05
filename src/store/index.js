import { createStore, combineReducers } from 'redux';
import filters from "../reducers/filters";
import heroes from "../reducers/heroes";

const enhancer = (createStore) => (...arg) => {
    const store = createStore(...arg);
    const oldDispatch = store.dispatch;
    store.dispatch = (action) => {
        if(typeof action === "string"){
            return oldDispatch({
                type: action
            })
        }
        else{
            return oldDispatch(action)
        }
    }
    return store
}
const store = createStore(combineReducers({filters, heroes}), enhancer);

export default store;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()