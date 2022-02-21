import {filtersFetched, filtersFetching, filtersFetchingError} from "../components/heroesFilters/filtersSlicer"
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
