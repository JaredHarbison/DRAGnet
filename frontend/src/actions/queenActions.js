import history from '../history';

export const RECEIVE_TRIVIA = 'GET_TRIVIA'
export const ADD_TRIVIA = 'ADD_TRIVIA';
export const FETCH_QUEENS = 'FETCH_QUEENS';
export const LOADING_QUEENS = 'LOADING_QUEENS';

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
        })
    };
};


//export const getTrivia = () => {
//    return (dispatch) => {
//        return fetch(`/trivia`)
//            .then(res => res.json())
//            .then(jsonResponse => {
//                dispatch({type: RECEIVE_TRIVIA, dragQueens: jsonResponse.data})
//            })
//            .catch(error => { throw(error); });
//    };
//};

//export const deleteTrivium = (trivium) => {
//    return (dispatch) => {
//        return fetch(`trivia/${trivium.id}.json`, {
//            method: "delete",
//            headers: {
//                'Content-Type': 'application/json'
//            },
//            body: JSON.stringify(trivium)
//        })
//    }
//}
