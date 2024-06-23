import styles from './styles/load.module.scss'
import {Commet} from "react-loading-indicators";
import {OrbitProgress} from "react-loading-indicators";

export default function Load() {
  return (
    <div className={styles.pageload}>
      <Commet color="#800080" size="medium" />
      {/* <OrbitProgress variant="dotted" color="#32cd32" size="medium" text="" textColor="" /> */}
    </div>
  )
}
