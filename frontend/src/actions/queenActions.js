export const FETCH_QUEENS = 'FETCH_QUEENS';
export const LOADING_QUEENS = 'LOADING_QUEENS';
export const UPDATE_QUEEN_TRIVIA = 'UPDATE_QUEEN_TRIVIA';
export const DELETE_QUEEN_TRIVIUM = 'DELETE_QUEEN_TRIVIUM';


//async actions


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

export const addTrivia = (trivium) => {
    return (dispatch) => {
        return fetch(`/trivia`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trivium)
        }).then(res => res.json()).then(data => {
          dispatch({type:UPDATE_QUEEN_TRIVIA, payload: data})
        })
    };
};

export const deleteTrivium = (trivium) => {
    return (dispatch) => {
        return fetch(`/trivia/${trivium.id}`, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trivium.id)
        })//.then(res => res.text()).then(data => {
        //  dispatch({type:DELETE_QUEEN_TRIVIUM, payload: data})
      //}//)
    };
};

export const updateQueen = (queen) => {
    return (dispatch) => {
        return fetch(`/queens/1`, {
            method: "patch",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(queen)
        })
      }
}
