import styles from "./App.module.scss"
import { Window } from "./components/Window/Window"

const App = () => {
  return (
    <div className={styles.app}>
      <Window />
    </div>
  )
}

export default App
