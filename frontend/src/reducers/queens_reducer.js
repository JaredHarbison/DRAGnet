import { RECEIVE_TRIVIA, ADD_TRIVIA, LOADING_QUEENS, FETCH_QUEENS } from '../actions/queenActions';

const initialState = {
    loading: false,
    drag_queens: [],
    trivia: []
}

export default function queens_reducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {

      case RECEIVE_TRIVIA:
      return { drag_queens: action.payload };

      case ADD_TRIVIA:
      return { drag_queens: action.payload };

      case LOADING_QUEENS:
      return Object.assign({}, state, { loading: true })

      case FETCH_QUEENS:
      return { loading: false, drag_queens: action.payload }

      default:
      return state
    }
}
