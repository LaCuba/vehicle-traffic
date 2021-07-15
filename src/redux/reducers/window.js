import { setItems } from "../actions/window"

const initialState = {
  items: [
    {
      diviceId: "00.00-0000-0000000",
      timestamp: 213412342134241,
      color: "black",
      class: "car",
      plate: "A777AA777",
      speed: 120,
    },
  ],
}

const windowReducer = (state = initialState, action) => {
  switch (action.type) {
    case "window/SET-ITEMS":
      return {
        ...state,
        items: [...state.items, ...action.items],
      }
    default:
      return state
  }
}

export const startItemsListening = (items) => async (dispatch) => {
  // items -> ws
  dispatch(setItems(items))
}

export default windowReducer
