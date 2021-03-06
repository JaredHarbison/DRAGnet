import { LOADING_QUEENS, FETCH_QUEENS, UPDATE_QUEEN } from '../actions/types';

import {initialState} from './initialState';

export default function queens_reducer(state = initialState, action) {
    console.log(action)
    let idx
    let tidx
    switch (action.type) {

      case LOADING_QUEENS:
      return Object.assign({}, state, { loading: true })

      case FETCH_QUEENS:
      return { loading: false, drag_queens: action.payload }

      case UPDATE_QUEEN:
      idx = state.drag_queens.indexOf(state.drag_queens.find(q => q.id == action.payload.queen_id))
      return {...state, 
              drag_queens: [...state.drag_queens.slice(0, idx), 
                            {...state.drag_queens[idx]}, 
                            ...state.drag_queens.slice(idx)]
              }

      default:
      return state
    }
}