export const LOADING_SEASONS = 'LOADING_SEASONS'
export const FETCH_SEASONS = 'FETCH_SEASONS'

export const fetchSeasons = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_SEASONS })
        return fetch('/seasons')
            .then(res => res.json())
            .then(jsonResponse => {
                dispatch({
                    type: FETCH_SEASONS,
                    payload: jsonResponse
                })
            })
    }
}