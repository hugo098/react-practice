import { Spinner } from "./Spinner";
import styles from "../styles/SpinnerFullPage.module.css";

export function SpinnerFullPage() {
  return (
    <div className={styles.spinnerFullpage}>
      <Spinner />
    </div>
  );
}
