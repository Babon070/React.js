import { combineReducers } from 'redux'
import mainReducer from "../reducer/main-reducer"
import likeReducer from '../reducer/like-reducer'


const rootReducer = combineReducers({
    mainReducer,
    likeReducer
})

export default rootReducer

