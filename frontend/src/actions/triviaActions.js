import { UPDATE_QUEEN_TRIVIA, DELETE_QUEEN_TRIVIUM, FETCH_TRIVIA, LOADING_TRIVIA } from './types';

export const fetchTrivia = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_TRIVIA })
        return fetch('/trivia')
            .then(res => res.json())
            .then(jsonResponse => {
                dispatch({
                    type: FETCH_TRIVIA,
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
            body: JSON.stringify(trivium)
        }).then(res => res.text()).then(data => {
          dispatch({type:DELETE_QUEEN_TRIVIUM, payload: data})
      })
    };
};
