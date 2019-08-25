import { combineReducers } from 'redux'
import queens_reducer from './queens_reducer'
import quotes_reducer from './quotes_reducer'
import seasons_reducer from './seasons_reducer'

const rootReducer = combineReducers({
    queens: queens_reducer,
    quotes: quotes_reducer, 
    seasons: seasons_reducer, 
});

export default rootReducer;
