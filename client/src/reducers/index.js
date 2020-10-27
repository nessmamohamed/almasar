import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import questReducer from './questReducer'
import resultsReducer from './resultsReducer'

export default combineReducers({
    
    error: errorReducer,
    quests: questReducer,
    results: resultsReducer
   
  })