import { combineReducers } from 'redux';
import queens_reducer from './queens_reducer'
//import trivia_reducer from './trivia_reducer'

const rootReducer = combineReducers({
    queens: queens_reducer,
    //trivia: trivia_reducer
});

export default rootReducer;
