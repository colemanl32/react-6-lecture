import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './ducks/userReducer'
import productsReducer from './ducks/productsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
})

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
)
