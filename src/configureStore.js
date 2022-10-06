import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer/index'
import thunk from 'redux-thunk' //import thunk

export default function configureStore() {
  let store = createStore(rootReducer, applyMiddleware(thunk)) // create store sử dụng thunk
  return store
}