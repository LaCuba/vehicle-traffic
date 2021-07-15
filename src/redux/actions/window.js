export const setMessages = (messages) => ({
  type: "window/SET-MESSAGES",
  messages,
})

export const setMessagesCount = (count) => ({
  type: "window/SET-COUNT-MESSAGES",
  count,
})
