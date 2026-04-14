import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { contact, hero, siteMeta } from "../../data/siteContent";
import styles from "./Hero.module.css";

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6zm2 2 6 4 6-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.07c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V23h-4V8z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
  );
}

export default function Hero() {
  const { handleButtonClick, testLanguage, language } = useContext(GlobalContext);

  return (
    <header className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.kicker}>{testLanguage(hero.kicker)}</p>
            <h1 className={styles.name}>{siteMeta.name}</h1>
            <p className={styles.headline}>{testLanguage(hero.headline)}</p>
            <p className={styles.sub}>{testLanguage(hero.sub)}</p>
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.btnPrimary}
                onClick={() => handleButtonClick(document.getElementById("work"))}
              >
                {testLanguage(hero.ctaWork)}
              </button>
              <button
                type="button"
                className={styles.btnGhost}
                onClick={() => handleButtonClick(document.getElementById("contact"))}
              >
                {testLanguage(hero.ctaContact)}
              </button>
              <a
                href={hero.cv.href}
                download={hero.cv.filename}
                className={styles.btnLink}
              >
                {testLanguage(hero.cv.label)}
              </a>
            </div>
            <ul className={styles.social} aria-label="Profiles">
              <li>
                <a className={styles.socialLink} href={`mailto:${contact.email}`}>
                  <IconMail />
                  <span className="sr-only">Email</span>
                </a>
              </li>
              {contact.links.map((l) => (
                <li key={l.id}>
                  <a
                    className={styles.socialLink}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.id === "linkedin" ? <IconLinkedIn /> : <IconGitHub />}
                    <span className="sr-only">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.panel} aria-hidden="true">
            <div className={styles.panelInner}>
              <span className={styles.mono}>01</span>
              <p className={styles.panelTitle}>
                {language === "es" ? "Ingeniería de producto" : "Product engineering"}
              </p>
              <p className={styles.panelText}>
                {language === "es"
                  ? "UI limpia, sistemas escalables, entregas conscientes."
                  : "Clean UI, scalable systems, deliberate shipping."}
              </p>
              <div className={styles.ornament} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
