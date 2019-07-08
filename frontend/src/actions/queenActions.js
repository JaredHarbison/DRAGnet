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


export const addTrivia = (queen, trivium) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_QUEENS' })
        return fetch(`/queens/${queen.id}/trivia`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(queen)
        })
    }
}
