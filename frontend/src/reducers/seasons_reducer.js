import { LOADING_SEASONS, FETCH_SEASONS } from '../actions/types'
import initialState from './initialState'

export default function seasons_reducer(state = initialState, action){
    console.log(action)
    switch (action.type){
        case LOADING_SEASONS:
        return Object.assign({}, state, { loading: true })
    
        case FETCH_SEASONS:
        return { loading: false, rpdr_seasons: action.payload }

        default: 
        return state 
    }
}