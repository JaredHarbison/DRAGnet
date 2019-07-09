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
        return fetch(`/trivia`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trivium)
        })
    }
}

export const deleteTrivium = (trivium) => {
    return (dispatch) => {
        return fetch(`trivia/${trivium.id}.json`, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trivium)
        })
    }
}
