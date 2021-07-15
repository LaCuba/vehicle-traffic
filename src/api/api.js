import WS from "../webSocket/ws"

let subscribers = []
let ws = null

function messageHandler(newMessages) {
  subscribers.forEach((s) => s(newMessages))
}

function createChannel() {
  ws = new WS("/getVehiclesHistory")
  ws.connect()
  ws.addEventListener("message", messageHandler)
}

export const api = {
  start() {
    createChannel()
  },
  stop() {
    subscribers = []
    ws.removeEventListener("message", messageHandler)
  },
  subscribe(callback) {
    subscribers.push(callback)
  },
  unsubscribe(callback) {
    subscribers = subscribers.filter((s) => s !== callback)
  },
}
