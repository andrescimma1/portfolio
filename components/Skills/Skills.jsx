import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { skills } from "../../data/siteContent";
import Section from "../Section/Section";
import styles from "./Skills.module.css";

export default function Skills() {
  const { testLanguage } = useContext(GlobalContext);

  return (
    <Section id="skills">
      <div className={styles.header}>
        <h2 className={styles.title}>{testLanguage(skills.title)}</h2>
        <p className={styles.subtitle}>{testLanguage(skills.subtitle)}</p>
      </div>
      <ul className={styles.grid} aria-label={testLanguage(skills.title)}>
        {skills.items.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
