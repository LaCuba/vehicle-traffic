export const randomNumber = (min, max) => {
  return Math.random() * (max - min) + min
}

export const randomInt = (min, max) => Math.round(randomNumber(min, max))

export const randomCount = (count) => {
  let result = ""
  for (let i = 0; i < count; i++) {
    result += randomInt(0, 9)
  }
  return result
}

export const randomElement = (arr) => arr[randomInt(0, arr.length - 1)]

const alphabet = ["a", "b", "c", "e", "h", "k", "m", "o", "p", "t", "x", "y"]

export const randomLetter = () => randomElement(alphabet)
export const randomUpperLetter = () => randomLetter().toUpperCase()

export const rangeFill = (count, fn) => {
  let result = []
  for (let i = 0; i < count; i++) {
    result.push(fn())
  }
  return result
}
