// import { createStore, combineReducers, compose, applyMiddleware  } from 'redux';
// import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

import heroes from "../components/heroesList/heroesSlicer";
import filters from "../components/heroesFilters/filtersSlicer";

const middleWare = (store) => (dispatch) => (action) => {
    if(typeof action === "string"){
        return dispatch({
            type: action
        })
    }
    else{
        return dispatch(action)
    }
}

// const enhancer = (createStore) => (...arg) => {
//     const store = createStore(...arg);
//     const oldDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         if(typeof action === "string"){
//             return oldDispatch({
//                 type: action
//             })
//         }
//         else{
//             return oldDispatch(action)
//         }
//     }
//     return store
// }

// const store = createStore(
//     combineReducers({filters, heroes}), 
//     compose(applyMiddleware(thunk, middleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const store = configureStore({
    reducer: {filters, heroes},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWare),
    devTools: process.env.NODE_ENV !== 'production'
})
export default store;
