import { Item } from "../Item/Item"
import styles from "./Window.module.scss"

export const Window = () => {
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
        <Item
          diviceId={"00.00-0000-0000000"}
          timestamp={213412342134241}
          color={"black"}
          classAuto={"car"}
          plate={"A777AA777"}
          speed={120}
        />
      </div>
    </div>
  )
}
