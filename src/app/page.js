import styles from "./page.module.css";
import Navigation from '../app/navigation'

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation/>
    </div>
  );
}
