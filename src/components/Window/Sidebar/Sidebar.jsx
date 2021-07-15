import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMessagesCount } from "../../../redux/actions/window"
import {
  startMessageListening,
  stopMessageListening,
} from "../../../redux/thunk/thunk"
import styles from "./Sidebar.module.scss"

export const Sidebar = () => {
  const dispatch = useDispatch()
  const messagesStateCount = useSelector(
    (state) => state.messagesWindow.messagesCount
  )

  const [count, setCount] = useState(messagesStateCount)

  const onCountChange = (e) => {
    setCount(e.currentTarget.value)
  }

  const onMessagesCountUpdator = () => {
    dispatch(setMessagesCount(count))
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.countMessages}>
        <p className={styles.title}>Кол-во отображаемых сообщений:</p>
        <input
          className={styles.countMessagesInput}
          type="text"
          value={count}
          onChange={onCountChange}
        />
        <button
          className={styles.countMessagesBtn}
          onClick={onMessagesCountUpdator}
        >
          Set
        </button>
      </div>
      <div className={styles.updatesListening}>
        <p className={styles.title}>Вкл/выкл обновления:</p>
        <button
          className={styles.startBtn}
          onClick={() => {
            dispatch(startMessageListening())
          }}
        >
          Start
        </button>
        <button
          className={styles.stopBtn}
          onClick={() => {
            dispatch(stopMessageListening())
          }}
        >
          Stop
        </button>
      </div>
    </div>
  )
}
