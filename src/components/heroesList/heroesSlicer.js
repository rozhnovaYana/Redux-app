import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useHttp } from '../../hooks/http.hook';

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

export const heroesRequest = createAsyncThunk(
    "heroes/heroesRequest",
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/heroes")
    }
) 

const heroesSlicer = createSlice({
    name:'heroes',
    initialState,
    reducers: {
        heroeDelete: (state, action) => {
            state.heroes = state.heroes.filter(i => i.id !== action.payload);
        },
        heroeAdd: (state, action) => {
            state.heroes = [...state.heroes, action.payload];
        }

    },
    extraReducers: builder => {
        builder
            .addCase(heroesRequest.pending, state => {
                state.heroesLoadingStatus = 'loading'
            })
            .addCase(heroesRequest.fulfilled, (state, action) => {
                state.heroes = action.payload;
                state.heroesLoadingStatus = 'idle';
            })
            .addCase(heroesRequest.rejected, state => {
                state.heroesLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
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
