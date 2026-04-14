import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { footer, siteMeta } from "../../data/siteContent";
import styles from "./Footer.module.css";

export default function Footer() {
  const { testLanguage } = useContext(GlobalContext);
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} {siteMeta.name}. {testLanguage(footer.note)}
        </p>
      </div>
    </footer>
  );
}
