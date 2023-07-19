import Image from "next/image";
import styles from "./AboutMe.module.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ABOUT_ME, ABOUT_ME_DESC_1, ABOUT_ME_DESC_2, ABOUT_ME_DESC_3, ABOUT_ME_DESC_4, ATTACK } from "../../utils/constants";

const AboutMe = () => {
  const [gifPlaying, setGifPlaying] = useState(true);
  const {testLanguage} = useContext(GlobalContext)

  const handleGifToggle = () => {
    setGifPlaying(!gifPlaying);
  };

  const checkGif = () => {
    if (!gifPlaying) {
      setTimeout(() => {
        setGifPlaying(!gifPlaying);
      }, 700);
      return "/assets/animations/VeeHeadNoLoop.gif";
    } else {
      return "/assets/animations/VeemonIdle.gif";
    }
  };

  return (
    <div id="aboutMeId" className={styles.container}>
      <h1 style={{marginBottom: '10px'}}>{testLanguage(ABOUT_ME)}</h1>
      <div className={styles.card}>
        <p>
          🖥️ {testLanguage(ABOUT_ME_DESC_1)}
        </p>
        <div className={styles.separatorContainer}>
          <hr className={styles.separatorLine} />
          <hr className={styles.separatorLine} />
        </div>
        <p>
          💼 {testLanguage(ABOUT_ME_DESC_2)}
        </p>
        <div className={styles.separatorContainer}>
          <hr className={styles.separatorLine} />
          <hr className={styles.separatorLine} />
        </div>
        <p>
          🎨 {testLanguage(ABOUT_ME_DESC_3)}
        </p>
        <div className={styles.separatorContainer}>
          <hr className={styles.separatorLine} />
          <hr className={styles.separatorLine} />
        </div>
        <p>
          💡 {testLanguage(ABOUT_ME_DESC_4)}
        </p>
        <div style={{ display: "flex", alignItems:'center' }}>
          <button className={styles.attackButton} onClick={handleGifToggle}>
            {testLanguage(ATTACK)}
          </button>
          <Image src={checkGif()} width={120} height={120} alt="idle" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
