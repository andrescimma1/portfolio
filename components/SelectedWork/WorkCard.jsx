import Image from "next/image";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "./SelectedWork.module.css";

export default function WorkCard({ item }) {
  const { testLanguage } = useContext(GlobalContext);
  const isRemote = item.image && /^https?:\/\//i.test(item.image);

  return (
    <article className={styles.card}>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.thumbLink}
        aria-label={`${testLanguage(item.name)} — ${item.url}`}
      >
        <div className={styles.thumb}>
          {item.image && !isRemote ? (
            <Image
              src={item.image}
              alt=""
              fill
              className={styles.thumbImg}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          ) : item.image && isRemote ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt=""
              className={styles.thumbImgRemote}
            />
          ) : (
            <div className={styles.thumbPlaceholder}>
              <span>{testLanguage({ en: "Add screenshot", es: "Agregar captura" })}</span>
            </div>
          )}
          <div className={styles.thumbOverlay} aria-hidden />
        </div>
      </a>
      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <h3 className={styles.cardTitle}>{testLanguage(item.name)}</h3>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.outLink}
          >
            {testLanguage({ en: "Visit", es: "Visitar" })}
            <span className={styles.arrow} aria-hidden>
              →
            </span>
          </a>
        </div>
        {item.role && <p className={styles.role}>{testLanguage(item.role)}</p>}
        <p className={styles.desc}>{testLanguage(item.description)}</p>
        <ul className={styles.stack} aria-label="Stack">
          {item.stack.map((tech) => (
            <li key={tech} className={styles.stackItem}>
              {tech}
            </li>
          ))}
        </ul>
        {item.gallery?.length ? (
          <div className={styles.galleryWrap}>
            <p className={styles.galleryLabel}>
              {testLanguage({ en: "More views", es: "Más vistas" })}
            </p>
            <ul className={styles.gallery}>
              {item.gallery.map((src) => (
                <li key={src} className={styles.galleryItem}>
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.galleryLink}
                    aria-label={testLanguage({
                      en: "Open screenshot full size",
                      es: "Abrir captura en tamaño completo",
                    })}
                  >
                    <Image
                      src={src}
                      alt=""
                      width={280}
                      height={175}
                      sizes="200px"
                      className={styles.galleryImg}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
