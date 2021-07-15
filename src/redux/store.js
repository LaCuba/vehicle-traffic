import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkCreator from "redux-thunk"
import messageWindowReducer from "./reducers/window"

const reducers = combineReducers({
  messagesWindow: messageWindowReducer,
})

const store = createStore(reducers, applyMiddleware(thunkCreator))

window.store = store

export default store
