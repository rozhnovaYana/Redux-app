import { heroesFetched, heroesFetchingError, heroesFetching } from '../components/heroesList/heroesSlicer';
import {filtersFetched, filtersFetching, filtersFetchingError} from "../components/heroesFilters/filtersSlicer"
// herroes fetching
export const heroesRequest = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}
// filters fetching
export const filtersRequest = (request) => (dispatch) => {
    dispatch(filtersFetching())
    request("http://localhost:3001/filters")
    .then(
        data => {
            dispatch(filtersFetched(data))
        },
        () => {
            dispatch(filtersFetchingError())
        })
}
