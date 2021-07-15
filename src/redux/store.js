import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkCreator from "redux-thunk"
import window from "./reducers/window"

const reducers = combineReducers({
  window: window,
})

const store = createStore(reducers, applyMiddleware(thunkCreator))

window.store = store

export default store
