import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { experience } from "../../data/siteContent";
import Section from "../Section/Section";
import styles from "./Experience.module.css";

export default function Experience() {
  const { testLanguage } = useContext(GlobalContext);

  return (
    <Section id="experience">
      <div className={styles.header}>
        <h2 className={styles.title}>{testLanguage(experience.title)}</h2>
        <p className={styles.subtitle}>{testLanguage(experience.subtitle)}</p>
      </div>
      <ul className={styles.list}>
        {experience.items.map((job) => (
          <li key={job.id} className={styles.card}>
            <div className={styles.cardTop}>
              <div>
                <h3 className={styles.company}>{job.company}</h3>
                <p className={styles.role}>{testLanguage(job.role)}</p>
              </div>
              <div className={styles.meta}>
                <span className={styles.period}>{testLanguage(job.period)}</span>
                <span className={styles.dot} aria-hidden>
                  ·
                </span>
                <span className={styles.location}>{testLanguage(job.location)}</span>
              </div>
            </div>
            <ul className={styles.highlights}>
              {job.highlights.map((h, i) => (
                <li key={i}>{testLanguage(h)}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
