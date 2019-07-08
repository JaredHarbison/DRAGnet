//async actions
export const fetchQueens = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_QUEENS' })
        return fetch(`/queens`)
            .then(res => res.json())
            .then(jsonResponse => {
                dispatch({
                    type: 'FETCH_QUEENS',
                    payload: jsonResponse
                })
            })
    }
}


export const addTrivia = (trivium) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_QUEENS' })
        return fetch(`/trivia`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trivium)
        })
    }
}
