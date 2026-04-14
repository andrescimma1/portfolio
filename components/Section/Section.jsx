import styles from "./Section.module.css";

export default function Section({ id, children, className = "", ...props }) {
  return (
    <section
      id={id}
      className={`${styles.section} ${className}`.trim()}
      {...props}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
