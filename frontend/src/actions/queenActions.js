import { LOADING_QUEENS, FETCH_QUEENS, UPDATE_QUEEN } from './types'

export const fetchQueens = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_QUEENS })
        return fetch(`/queens`)
            .then(res => res.json())
            .then(jsonResponse => {
                dispatch({
                    type: FETCH_QUEENS,
                    payload: jsonResponse
                })
            })
    }
}

export const updateQueen = (queen) => {
    return (dispatch) => {
        return fetch(`/queens/${queen.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(queen)
        }).then(res => res.json()).then(data => {
            dispatch({
                    type: UPDATE_QUEEN, 
                    payload: data})
        })
      }
}

