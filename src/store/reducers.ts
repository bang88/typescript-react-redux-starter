import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export const makeRootReducer = (asyncReducers) => {
  // use assign instead of ...asyncReducers
  const reducers = Object.assign({ routing: routerReducer }, asyncReducers);
  return combineReducers(reducers)
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
