import { LOADING_SEASONS, FETCH_SEASONS, UPDATE_SEASON } from './types'

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

export const updateSeason = (season) => {
    return (dispatch) => {
        return fetch(`/seasons/${season.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(season)
        }).then(res => res.json()).then(data => {
            dispatch({
                    type: UPDATE_SEASON, 
                    payload: data})
        })
      }
}

export const addAppearance = (appearance) => {
    return (dispatch) => {
        return fetch(`/appearances`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appearance)
        }).then(res => res.json()).then(data => {
          dispatch({type:UPDATE_SEASON, payload: data})
        })
    };
};