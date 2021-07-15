const initialState = {
  messages: [],
  messagesCount: 50,
}

const messageWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case "window/SET-MESSAGES":
      let newState = { ...state, messages: [...state.messages] }
      if (state.messages.length >= state.messagesCount) {
        newState.messages.shift()
        newState = { ...state, messages: [...newState.messages] }
      }
      return {
        ...newState,
        messages: [...newState.messages, ...action.messages],
      }
    case "window/SET-COUNT-MESSAGES":
      return {
        ...state,
        messagesCount: action.count,
      }
    default:
      return state
  }
}

export default messageWindowReducer
