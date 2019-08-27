import { LOADING_SEASONS, FETCH_SEASONS, UPDATE_SEASON } from '../actions/types'
import initialState from './initialState'

export default function seasons_reducer(state = initialState, action){
    console.log(action)
    let idx 
    switch (action.type){
        case LOADING_SEASONS:
        return Object.assign({}, state, { loading: true })
    
        case FETCH_SEASONS:
        return { loading: false, rpdr_seasons: action.payload }

        case UPDATE_SEASON:
            idx = state.rpdr_seasons.indexOf(state.rpdr_seasons.find(s => s.id == action.payload.season_id))
            return {...state, 
                    rpdr_seasons: [...state.rpdr_seasons.slice(0, idx), 
                                  {...state.rpdr_seasons[idx]}, 
                                  ...state.rpdr_seasons.slice(idx)]
                    }
      
        default: 
        return state 
    }
}