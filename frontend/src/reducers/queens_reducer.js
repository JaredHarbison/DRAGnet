import { LOADING_QUEENS, FETCH_QUEENS, UPDATE_QUEEN_TRIVIA, DELETE_QUEEN_TRIVIUM, UPDATE_QUEEN } from '../actions/types';

import initialState from './initialState';

export default function queens_reducer(state = initialState, action) {
    console.log(action)
    let idx
    let tidx
    switch (action.type) {

      case LOADING_QUEENS:
      return Object.assign({}, state, { loading: true })

      case FETCH_QUEENS:
      return { loading: false, drag_queens: action.payload }

      case UPDATE_QUEEN_TRIVIA:
      idx = state.drag_queens.indexOf(state.drag_queens.find(q => q.id == action.payload.queen_id))
      return {...state, 
              drag_queens: [...state.drag_queens.slice(0, idx),
                            {...state.drag_queens[idx],
                                trivia: [...state.drag_queens[idx].trivia, action.payload]
                            },
                            ...state.drag_queens.slice(idx)
                            ]
              }

      case DELETE_QUEEN_TRIVIUM:
      idx = state.drag_queens.indexOf(state.drag_queens.find(queen => queen.id !== action.payload.queen_id))
      tidx = state.drag_queens.indexOf(state.drag_queens.find(trivium => trivium.id !== action.payload.trivium_id))
      return {...state,
              drag_queens: [...state.drag_queens.slice(0, idx),
                            {...state.drag_queens[idx],
                                trivia: [...state.drag_queens[idx].trivia.slice(0, tidx), 
                                         
                                         ...state.drag_queens[idx].trivia.slice(tidx + 1, tidx)]
                            },
                            ...state.drag_queens.slice(idx)
                            ]
              }

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