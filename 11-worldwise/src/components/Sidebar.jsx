import { Outlet } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";
import { AppNav } from "./AppNav";
import { Logo } from "./Logo";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}
