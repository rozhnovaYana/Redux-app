const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus:"idle",
    activeFilter: "all",
    heroesFiltered: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle',
                heroesFiltered: state.activeFilter === "all" ? action.payload : action.payload.filter(i => i.element === state.activeFilter)
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROE_DELETE':
            let newArr = state.heroes.filter(i => i.id !== action.value);
            return {
                ...state,
                heroes: state.heroes.filter(i => i.id !== action.value),
                heroesFiltered: state.activeFilter ==="all" ? newArr : newArr.filter(i => i.element === state.activeFilter)
            }
        case 'HEROE_ADD':
            let newArray = [...state.heroes, action.heroe];
            return{
                ...state,
                heroes: newArray,
                heroesFiltered: 
                state.activeFilter ==="all" ?
                 newArray : newArray.filter(i => i.element === state.activeFilter)
            }
        case 'FILTERS_FETCHING':
            return{
                ...state,
                filtersLoadingStatus: "loading"
            }
        case 'FILTERS_FETCHED':
            return{
                ...state,
                filters: action.filters,
                filtersLoadingStatus: "idle"
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state, 
                filtersLoadingStatus: "error"
            }
        case 'SET_ACTIVE_FILTER': 
            return {
                ...state,
                activeFilter: action.payload,
                heroesFiltered: action.payload === "all" ? state.heroes : state.heroes.filter(i => i.element === action.payload)
            }
        default: return state
    }
}

export default reducer;