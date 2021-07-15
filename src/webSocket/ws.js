import {
  randomCount,
  randomInt,
  randomElement,
  randomUpperLetter,
  rangeFill,
} from "./helpers"

// format: 00.00-0000-0000000
const randomDeviceId = () =>
  `${randomCount(2)}.${randomCount(2)}-${randomCount(4)}-${randomCount(7)}`

// format: X000XX000 e.g. A111AA777
const randomPlate = () =>
  `${randomUpperLetter()}${randomCount(
    3
  )}${randomUpperLetter()}${randomUpperLetter()}${randomCount(3)}`

const colors = ["black", "white", "red", "green", "blue", "yellow", "silver"]
const classes = ["car", "truck", "bus", "motorcycle"]

const createVehicle = () => ({
  deviceId: randomDeviceId(),
  timestamp: Date.now(),
  color: randomElement(colors),
  class: randomElement(classes),
  plate: randomPlate(),
  speed: randomInt(40, 200),
})

export default class WS {
  constructor(endpoint) {
    this.endpoint = endpoint
    this.handlers = {
      connection: [],
      message: [],
    }
    this.intervalId = 0
    this.vehicleCount = 1
  }

  connect() {
    setTimeout(() => {
      this._trigger("connection", "connected")
    }, 200)

    this._runFakeUpdates()
  }

  _runFakeUpdates() {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(() => {
      this._trigger("message", rangeFill(this.vehicleCount, createVehicle))
    }, 1500)
  }

  _trigger(eventName, ...args) {
    for (const handler of this.handlers[eventName]) {
      handler(...args)
    }
  }

  addEventListener(eventName, handler) {
    this.handlers[eventName].push(handler)
  }

  removeEventListener(eventName, handlerToRemove) {
    this.handlers[eventName] = this.handlers[eventName].filter(
      (handler) => handler !== handlerToRemove
    )
  }
}
