import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: [],
    filtersLoadingStatus:"idle",
    activeFilter: "all"
}

const filtersSlicer = createSlice({
    name:'heroes',
    initialState,
    reducers: {
        filtersFetching: state => {
            state.filtersLoadingStatus = "loading"
        },
        filtersFetched: (state, action) => {
            state.filters = action.payload,
            state.filtersLoadingStatus = "idle"
        },
        filtersFetchingError: state => {
            state.filtersLoadingStatus = "error"
        },
        setActiveFilter: (state, action) => {
            state.activeFilter = action.payload
        }
    }
})

const {reducer, actions} = filtersSlicer;

export default reducer;

export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    setActiveFilter
} = actions;