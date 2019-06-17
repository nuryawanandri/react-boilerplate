import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer'
// import { counterReducer, initialState } from './reducer/counter'

export function configureStore(initialStore = {}) {
  return createStore(
    rootReducer,
    initialStore,
    composeWithDevTools(applyMiddleware())
  )
}