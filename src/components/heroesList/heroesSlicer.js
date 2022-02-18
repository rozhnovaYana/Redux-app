import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const heroesSlicer = createSlice({
    name:'heroes',
    initialState,
    reducers: {
        heroesFetching: state => {
            state.heroesLoadingStatus = 'loading'
        },
        heroesFetched:  (state, action) => {
            state.heroes = action.payload;
            state.heroesLoadingStatus = 'idle';
        },
        heroesFetchingError: state => {
            state.heroesLoadingStatus = 'error';
        },
        heroeDelete: (state, action) => {
            state.heroes = state.heroes.filter(i => i.id !== action.payload);
        },
        heroeAdd: (state, action) => {
            state.heroes = [...state.heroes, action.payload];
        }

    }
})
const {reducer, actions} = heroesSlicer;

export default reducer;

export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroeDelete,
    heroeAdd
} = actions;
