import { api } from "../../api/api"
import { setMessages } from "../actions/window"

const initialState = {
  messages: [],
}

const messageWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case "window/SET-MESSAGES":
      return {
        ...state,
        messages: [...state.messages, ...action.messages],
      }
    default:
      return state
  }
}

let _newMessageHandler = null

const newMessageHandlerCreator = (dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(setMessages(messages))
    }
  }
  return _newMessageHandler
}

export const startMessageListening = () => (dispatch) => {
  api.subscribe(newMessageHandlerCreator(dispatch))
  api.start()
}

export const stopMessageListening = () => (dispatch) => {
  api.unsubscribe(newMessageHandlerCreator(dispatch))
  api.stop()
}

export default messageWindowReducer
