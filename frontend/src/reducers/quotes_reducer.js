import { LOADING_QUOTES, FETCH_QUOTES, ADD_QUEEN_QUOTE, DELETE_QUEEN_QUOTE } from '../actions/types';

import {initialState} from './initialState';

export default function quotes_reducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {


        case LOADING_QUOTES: 
            return Object.assign({}, state, { loading: true })

        case FETCH_QUOTES: 
            return { loading: false, rpdr_quotes: action.payload }

        case ADD_QUEEN_QUOTE:  
            return {
                ...state, 
                rpdr_quotes: [...state.rpdr_quotes, action.payload]
            }
         
                        
      case DELETE_QUEEN_QUOTE:
        return state.filter(q => q.id !== action.payload.id)

      default:
      return state
    }
}

//case ADD_QUEEN_QUOTE:  
//idx = state.drag_queens.indexOf(state.drag_queens.find(q => q.id == action.payload.queen_id))  
//debugger  
//return {...state, 
//        drag_queens: [...state.drag_queens.slice(0, idx), 
//                      {...state.drag_queens[idx],
//                          quotes: [...state.drag_queens[idx].quotes, action.payload]
//                      }, 
//                      ...state.drag_queens.slice(idx) 
//                      ]
//        }