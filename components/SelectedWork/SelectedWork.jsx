import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { selectedWork } from "../../data/siteContent";
import Section from "../Section/Section";
import WorkCard from "./WorkCard";
import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  const { testLanguage } = useContext(GlobalContext);

  return (
    <Section id="work">
      <div className={styles.header}>
        <h2 className={styles.title}>{testLanguage(selectedWork.title)}</h2>
        <p className={styles.subtitle}>{testLanguage(selectedWork.subtitle)}</p>
      </div>
      <div className={styles.grid}>
        {selectedWork.items.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
