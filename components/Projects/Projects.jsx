import { useContext, useState } from "react";
import Chip from "../Chip/Chip";
import styles from "./Projects.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import { INDIVIDUAL_PROJECT, IND_PROJECT_DESC, MARVEL_DESC, ONE_MONTH, PROJECTS, TWO_WEEKS } from "../../utils/constants";

const Projects = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingMarvel, setIsPlayingMarvel] = useState(false)
  const {testLanguage} = useContext(GlobalContext)

  const handlePlayClick = (set) => {
    set(true);
  };

  return (
    <div id="projectsId" className={styles.container}>
      <h1 style={{ marginBottom: "10px" }}>{testLanguage(PROJECTS)}</h1>
      <div className={styles.card}>
        <h5 style={{ fontWeight: "bold" }}>
          {testLanguage(INDIVIDUAL_PROJECT)} | Videogames | Fullstack
        </h5>
        <Chip label={testLanguage(ONE_MONTH)} />
        <p style={{ marginTop: "0.7rem" }}>
          {testLanguage(IND_PROJECT_DESC)}
        </p>
        {isPlaying ? (
          <video
            src={"/assets/videos/Videogames.mp4"}
            controls
            autoPlay
            style={{ width: "300px" }}
          />
        ) : (
          <div className={styles.imgContainer}>
            <img
              src={"/assets/images/videogames.jpg"}
              alt="Miniatura del video"
              className={styles.thumbnail}
            />
            <img
              src={"/assets/images/play.svg"}
              alt="Icono de reproducción"
              className={styles.playIcon}
              onClick={() => handlePlayClick(setIsPlaying)}
            />
          </div>
        )}

        <h5 style={{ fontWeight: "bold", marginTop:'2rem' }}>Marvel App | Frontend</h5>
        <Chip label={testLanguage(TWO_WEEKS)} />
        <p style={{ marginTop: "0.7rem" }}>
          {testLanguage(MARVEL_DESC)}
        </p>
        {isPlayingMarvel ? (
          <video
            src={"/assets/videos/spider.mp4"}
            controls
            autoPlay
            style={{ width: "300px" }}
          />
        ) : (
          <div className={styles.imgContainer}>
            <img
              src={"/assets/images/spider.jpg"}
              alt="Miniatura del video"
              className={styles.thumbnail}
            />
            <img
              src={"/assets/images/play.svg"}
              alt="Icono de reproducción"
              className={styles.playIcon}
              onClick={() => handlePlayClick(setIsPlayingMarvel)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
