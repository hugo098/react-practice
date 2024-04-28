import { Map, Sidebar, User } from "../components";
import styles from "../styles/AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <User />
      <Map />
    </div>
  );
}
