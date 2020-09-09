import { createStore } from 'redux'
import userReducer from './ducks/userReducer'

export default createStore(userReducer)
