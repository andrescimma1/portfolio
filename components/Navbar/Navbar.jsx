import styles from "./Navbar.module.css";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Image from "next/image";
import { ABOUT_ME, CONTACT_ME, EXPERIENCE, HOME, PROJECTS } from "../../utils/constants";

const Navbar = () => {
  const { handleButtonClick, toggleLanguage, language, testLanguage } = useContext(GlobalContext);
  const [navColor, setNavColor] = useState("transparent");

  const [isMobileView, setIsMobileView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 980);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 93.59;
      const threshold = 10;

      // Calcula la posición del scroll y cambia el color del Navbar según sea necesario
      if (scrollPosition > navbarHeight) {
        setNavColor(
          `rgba(22, 0, 42, ${Math.min(
            (scrollPosition - navbarHeight) / threshold,
            1
          )})`
        ); // Cambio gradual del color
      } else {
        setNavColor("transparent"); // Color transparente cuando el scroll está en la parte superior del Navbar
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={styles.navbar} style={{ backgroundColor: navColor }}>
        {!isMobileView ? <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "900px",
            alignItems: "center",
          }}
        >
          <h1>Andres Cimma</h1>
          <div
            className={styles.navButton}
            onClick={() => handleButtonClick(document.getElementById("homeId"))}
          >
            {testLanguage(HOME)}
          </div>
          <div
            className={styles.navButton}
            onClick={() =>
              handleButtonClick(document.getElementById("aboutMeId"))
            }
          >
            {testLanguage(ABOUT_ME)}
          </div>
          <div
            className={styles.navButton}
            onClick={() =>
              handleButtonClick(document.getElementById("resumeId"))
            }
          >
            {testLanguage(EXPERIENCE)}
          </div>
          <div
            className={styles.navButton}
            onClick={() =>
              handleButtonClick(document.getElementById("projectsId"))
            }
          >
            {testLanguage(PROJECTS)}
          </div>
          <div
            className={styles.navButton}
            onClick={() =>
              handleButtonClick(document.getElementById("contactMeId"))
            }
          >
            {testLanguage(CONTACT_ME)}
          </div>
          <div
            className={styles.navButton}
            onClick={() =>
              toggleLanguage()
            }
          >
            {language === "es" ? <Image src={'/assets/images/eeuu.svg'} width={30} height={30} alt="eeuu"/> : 
            <Image src={'/assets/images/spain.svg'} width={30} height={30} alt="spain"/>}
          </div>
        </div>
        :
        <div>
          <div>
            <input
              type="checkbox"
              id="toggle"
              checked={isOpen}
              onChange={handleToggle}
              style={{ display: "none" }}
            />
            <label htmlFor="toggle" className={styles.burger}>
              &#9776;
            </label>
          </div>
          <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
            <input
              type="checkbox"
              id="toggle"
              checked={isOpen}
              onChange={handleToggle}
              style={{display:'none'}}
            />
            <label htmlFor="toggle" className={styles.closeIcon}>&#10005;</label>
            <ul className={styles["menuList"]}>
            <li
            className={styles.navButton}
            onClick={() => handleButtonClick(document.getElementById("homeId"))}
          >
            {testLanguage(HOME)}
          </li>
          <li
            className={styles.navButton}
            onClick={() =>
              handleButtonClick(document.getElementById("aboutMeId"))
            }
          >
            {testLanguage(ABOUT_ME)}
          </li>
          <li
            className={styles.navButton}
            onClick={() =>
              handleButtonClick(document.getElementById("resumeId"))
            }
          >
            {testLanguage(EXPERIENCE)}
          </li>
          <li
            className={styles.navButton}
            onClick={() =>
              handleButtonClick(document.getElementById("projectsId"))
            }
          >
            {testLanguage(PROJECTS)}
          </li>
          <li
            className={styles.navButton}
            onClick={() =>
              handleButtonClick(document.getElementById("contactMeId"))
            }
          >
            {testLanguage(CONTACT_ME)}
          </li>
          <li
            className={styles.navButton}
            onClick={() => toggleLanguage()}
          >
            {language === "es" ? <Image src={'/assets/images/eeuu.svg'} width={30} height={30} alt="eeuu"/> : 
            <Image src={'/assets/images/spain.svg'} width={30} height={30} alt="spain"/>}
          </li>
            </ul>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;