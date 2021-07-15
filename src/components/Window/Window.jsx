import { useSelector } from "react-redux"
import { Item } from "../Item/Item"
import styles from "./Window.module.scss"

export const Window = () => {
  const items = useSelector((state) => state.window.items)

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
                diviceId={item.diviceId}
                timestamp={item.timestamp}
                color={item.color}
                classAuto={item.class}
                plate={item.plate}
                speed={item.speed}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
