// herroes fetching

export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

// heroes add/delete

export const heroeDelete = (value) => {
    return{
        type:`HEROE_DELETE`,
        value
    }
}
export const heroeAdd = (heroe) => {
    return{
        type:`HEROE_ADD`,
        heroe
    }
}

// filters fetching

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}
export const filtersFetched = (filters) => {
    return{
        type:`FILTERS_FETCHED`,
        filters
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}
export const setActiveFilter = (filter) => {
    return {
        type: 'SET_ACTIVE_FILTER',
        payload: filter
    }
}