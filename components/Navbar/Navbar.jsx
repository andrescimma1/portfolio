import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { GlobalContext } from "../../context/GlobalContext";
import { nav, siteMeta } from "../../data/siteContent";
import styles from "./Navbar.module.css";

const SECTION_IDS = ["hero", "about", "experience", "work", "skills", "contact"];

const NAV_LABEL = {
  hero: nav.home,
  about: nav.about,
  experience: nav.experience,
  work: nav.work,
  skills: nav.skills,
  contact: nav.contact,
};

export default function Navbar() {
  const { handleButtonClick, toggleLanguage, language, testLanguage } =
    useContext(GlobalContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const go = (id) => {
    const el = document.getElementById(id);
    handleButtonClick(el);
    setMobileOpen(false);
  };

  return (
    <header
      className={`${styles.bar} ${scrolled ? styles.barScrolled : ""}`}
      role="banner"
    >
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.brand}
          onClick={() => go("hero")}
        >
          {siteMeta.name}
        </button>

        <nav className={styles.desktop} aria-label="Primary">
          {SECTION_IDS.map((id) => (
            <button
              key={id}
              type="button"
              className={styles.link}
              onClick={() => go(id)}
            >
              {testLanguage(NAV_LABEL[id])}
            </button>
          ))}
          <button
            type="button"
            className={styles.lang}
            onClick={toggleLanguage}
            aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {language === "es" ? (
              <Image src="/assets/images/eeuu.svg" width={22} height={22} alt="" />
            ) : (
              <Image src="/assets/images/spain.svg" width={22} height={22} alt="" />
            )}
          </button>
        </nav>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobile} ${mobileOpen ? styles.mobileOpen : ""}`}
        aria-hidden={!mobileOpen}
        role="presentation"
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={styles.mobileInner}
          role="presentation"
          onClick={(e) => e.stopPropagation()}
        >
          {SECTION_IDS.map((id) => (
            <button
              key={id}
              type="button"
              className={styles.mobileLink}
              onClick={() => go(id)}
            >
              {testLanguage(NAV_LABEL[id])}
            </button>
          ))}
          <button
            type="button"
            className={styles.mobileLink}
            onClick={() => {
              toggleLanguage();
              setMobileOpen(false);
            }}
          >
            {language === "es" ? "English" : "Español"}
          </button>
        </div>
      </div>
    </header>
  );
}
