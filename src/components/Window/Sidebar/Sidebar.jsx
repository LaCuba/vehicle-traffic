import { useDispatch } from "react-redux"
import {
  startMessageListening,
  stopMessageListening,
} from "../../../redux/reducers/window"
import styles from "./Sidebar.module.scss"

export const Sidebar = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.sidebar}>
      <div className={styles.countMessages}>
        <p className={styles.title}>Кол-во отображаемых сообщений:</p>
        <input className={styles.countMessagesInput} type="text" />
        <button className={styles.countMessagesBtn}>Set</button>
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
