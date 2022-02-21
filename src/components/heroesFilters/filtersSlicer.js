import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useHttp } from '../../hooks/http.hook';

const initialState = {
    filters: [],
    filtersLoadingStatus:"idle",
    activeFilter: "all"
}

export const filtersRequest = createAsyncThunk(
    "filters/filtersRequest",
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/filters")
    }
)

const filtersSlicer = createSlice({
    name:'filters',
    initialState,
    reducers: {
        setActiveFilter: (state, action) => {
            state.activeFilter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(filtersRequest.pending, state => {
                state.filtersLoadingStatus = "loading"
            })
            .addCase(filtersRequest.fulfilled, (state, action) => {
                state.filters = action.payload;
                state.filtersLoadingStatus = "idle"
            })
            .addCase(filtersRequest.rejected, state => {
                state.filtersLoadingStatus = "error"
            })
            .addDefaultCase(() =>{})
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