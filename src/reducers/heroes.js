const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const heroes = (state = initialState, action) => {
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
            }
        case 'HEROE_ADD':
            return{
                ...state,
                heroes: [...state.heroes, action.heroe]
            }
        case 'FILTERS_FETCHING':
            return{
                ...state,
                filtersLoadingStatus: "loading"
            }
        default: return state
    }
}

export default heroes;