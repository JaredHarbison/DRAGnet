import { ADD_QUEEN_QUOTE, DELETE_QUEEN_QUOTE } from '../actions/quoteActions';

import initialState from './initialState';

export default function queens_reducer(state = initialState, action) {
    console.log(action)
    let idx
    let tidx
    switch (action.type) {

      case ADD_QUEEN_QUOTE:
      idx = state.drag_queens.indexOf(state.drag_queens.find(q => q.id == action.payload.queen_id))
      return {...state, 
              drag_queens: [...state.drag_queens.slice(0, idx),
                            {...state.drag_queens[idx],
                                quotes: [...state.drag_queens[idx].quotes, action.payload]
                            },
                            ...state.drag_queens.slice(idx)
                            ]
              }

      case DELETE_QUEEN_QUOTE:
      idx = state.drag_queens.indexOf(state.drag_queens.find(queen => queen.id !== action.payload.queen_id))
      tidx = state.drag_queens.indexOf(state.drag_queens.find(quote => quote.id !== action.payload.quote_id))
      return {...state,
              drag_queens: [...state.drag_queens.slice(0, idx),
                            {...state.drag_queens[idx],
                                quotes: [...state.drag_queens[idx].quotes.slice(0, tidx), 
                                         
                                         ...state.drag_queens[idx].quotes.slice(tidx + 1, tidx)]
                            },
                            ...state.drag_queens.slice(idx)
                            ]
              }

      default:
      return state
    }
}