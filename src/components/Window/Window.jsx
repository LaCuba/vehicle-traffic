import { useDispatch, useSelector } from "react-redux"
import {
  startMessageListening,
  stopMessageListening,
} from "../../redux/reducers/window"
import { Item } from "../Item/Item"
import styles from "./Window.module.scss"

export const Window = () => {
  const items = useSelector((state) => state.messageWindow.messages)

  const dispatch = useDispatch()

  return (
    <div className={styles.window}>
      <div className={styles.body}>
        <header className={styles.header}>
          <div className={styles.title}>
            <h2>ID</h2>
          </div>
          <div className={styles.title}>
            <h2>Timestamp</h2>
          </div>
          <div className={styles.title}>
            <h2>Color</h2>
          </div>
          <div className={styles.title}>
            <h2>Class</h2>
          </div>
          <div className={styles.title}>
            <h2>Plate</h2>
          </div>
          <div className={styles.title}>
            <h2>Speed</h2>
          </div>
        </header>
        <div className={styles.items}>
          {items.map((item) => {
            return (
              <Item
                key={item.deviceId}
                diviceId={item.deviceId}
                timestamp={item.timestamp}
                color={item.color}
                classAuto={item.class}
                plate={item.plate}
                speed={item.speed}
              />
            )
          })}
        </div>
        <button
          className={styles.start}
          onClick={() => {
            dispatch(startMessageListening())
          }}
        >
          Start updates
        </button>
        <button
          className={styles.stop}
          onClick={() => {
            dispatch(stopMessageListening())
          }}
        >
          Stop updates
        </button>
      </div>
    </div>
  )
}
