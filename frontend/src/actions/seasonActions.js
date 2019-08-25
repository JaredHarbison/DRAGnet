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