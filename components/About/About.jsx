import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { about } from "../../data/siteContent";
import Section from "../Section/Section";
import styles from "./About.module.css";

export default function About() {
  const { testLanguage } = useContext(GlobalContext);

  return (
    <Section id="about">
      <div className={styles.header}>
        <h2 className={styles.title}>{testLanguage(about.title)}</h2>
        <p className={styles.lead}>{testLanguage(about.lead)}</p>
      </div>
      <div className={styles.body}>
        {about.paragraphs.map((p, i) => (
          <p key={i} className={styles.p}>
            {testLanguage(p)}
          </p>
        ))}
      </div>
    </Section>
  );
}
