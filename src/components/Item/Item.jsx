import styles from "./Item.module.scss"

export const Item = ({
  diviceId,
  timestamp,
  color,
  classAuto,
  plate,
  speed,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.column}>
        <h2>{diviceId}</h2>
      </div>
      <div className={styles.column}>
        <h2>{timestamp}</h2>
      </div>
      <div className={styles.column}>
        <h2>{color}</h2>
      </div>
      <div className={styles.column}>
        <h2>{classAuto}</h2>
      </div>
      <div className={styles.column}>
        <h2>{plate}</h2>
      </div>
      <div className={styles.column}>
        <h2>{speed}</h2>
      </div>
    </div>
  )
}
