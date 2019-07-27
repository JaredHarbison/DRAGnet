
export const RECEIVE_TRIVIA = 'GET_TRIVIA'
export const ADD_TRIVIA = 'ADD_TRIVIA';
export const FETCH_QUEENS = 'FETCH_QUEENS';
export const LOADING_QUEENS = 'LOADING_QUEENS';
export const UPDATE_QUEEN_TRIVIA = 'UPDATE_QUEEN_TRIVIA';
export const DELETE_QUEEN_TRIVIUM = 'DELETE_QUEEN_TRIVIUM';


//async actions
export const fetchQueens = () => {
  console.log("c")
    return (dispatch) => {
        dispatch({ type: LOADING_QUEENS })
        return fetch(`/queens`)
            .then(res => res.json())
            .then(jsonResponse => {
              console.log("d")
                dispatch({
                    type: FETCH_QUEENS,
                    payload: jsonResponse
                })
            })
    }
    console.log("e")
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
