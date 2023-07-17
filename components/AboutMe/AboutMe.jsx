import Image from "next/image";
import styles from "./AboutMe.module.css";
import { useState } from "react";

const AboutMe = () => {
  const [gifPlaying, setGifPlaying] = useState(true);

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
      <h1 style={{marginBottom: '10px'}}>Sobre mí</h1>
      <div className={styles.card}>
        <p>
          🖥️ Soy un desarrollador Fullstack con enfoque en el Frontend,
          apasionado por la programación y el diseño. Me encanta crear
          experiencias web interactivas y atractivas.
        </p>
        <div className={styles.separatorContainer}>
          <hr className={styles.separatorLine} />
          <hr className={styles.separatorLine} />
        </div>
        <p>
          💼 Tengo experiencia trabajando como programador Frontend en una
          empresa de logística, donde formé parte del equipo de IT, y he mejorado mis
          habilidades en tecnologías como React, Next.js, JavaScript y Node.js.
        </p>
        <div className={styles.separatorContainer}>
          <hr className={styles.separatorLine} />
          <hr className={styles.separatorLine} />
        </div>
        <p>
          🎨 Además de mi pasión por la programación, también disfruto del
          diseño y el arte. Me gusta crear dibujos en pixel art y agregar
          animaciones para dar vida a mis proyectos.
        </p>
        <div className={styles.separatorContainer}>
          <hr className={styles.separatorLine} />
          <hr className={styles.separatorLine} />
        </div>
        <p>
          💡 Soy perfeccionista y siempre me esfuerzo por lograr los detalles
          más finos en cada proyecto que emprendo, aunque entiendo que la
          perfección absoluta es un objetivo difícil de alcanzar.
        </p>
        <div style={{ display: "flex", alignItems:'center' }}>
          <button className={styles.attackButton} onClick={handleGifToggle}>
            Ataque
          </button>
          <Image src={checkGif()} width={120} height={120} alt="idle" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
