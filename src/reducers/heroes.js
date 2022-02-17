import { createReducer } from "@reduxjs/toolkit";
import {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroeDelete,
    heroeAdd 
} from "../actions";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}


const heroes = createReducer(initialState, builder => {
    builder
        .addCase(heroesFetching, state => {
            state.heroesLoadingStatus = 'loading'
        })
        .addCase(heroesFetched, (state, action) => {
            state.heroes = action.payload;
            state.heroesLoadingStatus = 'idle';
        })
        .addCase(heroesFetchingError, state => {
            state.heroesLoadingStatus = 'error';
        })
        .addCase(heroeDelete, (state, action) => {
            state.heroes = state.heroes.filter(i => i.id !== action.payload);
        })
        .addCase(heroeAdd, (state, action) => {
            state.heroes = [...state.heroes, action.payload];
        }) 
        .addDefaultCase(() => {})
})

// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle',
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'HEROE_DELETE':
//             let newArr = state.heroes.filter(i => i.id !== action.value);
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(i => i.id !== action.value),
//             }
//         case 'HEROE_ADD':
//             return{
//                 ...state,
//                 heroes: [...state.heroes, action.heroe]
//             }
//         case 'FILTERS_FETCHING':
//             return{
//                 ...state,
//                 filtersLoadingStatus: "loading"
//             }
//         default: return state
//     }
// }

export default heroes;