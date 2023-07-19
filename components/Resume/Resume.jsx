import { useContext } from "react";
import Chip from "../Chip/Chip";
import styles from "./Resume.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import { EXPERIENCE, GROUP_PROJECT, GROUP_PROJECT_DESC, ONE_MONTH, WORK_EXPERIENCE, WORK_EXPERIENCE_DESC } from "../../utils/constants";

const Resume = () => {
  const {testLanguage} = useContext(GlobalContext)
  return (
    <div id="resumeId" className={styles.container}>
      <h1 style={{ marginBottom: "10px" }}>{testLanguage(EXPERIENCE)}</h1>
      <div className={styles.card}>
        <h4 style={{fontWeight:'bold'}}>{testLanguage(WORK_EXPERIENCE)}</h4>
        <h5 style={{fontWeight:'bold'}}>99minutos.com</h5>
        <Chip label={"2021-2023"}/>
        <p style={{marginTop:'0.7rem'}}>
          {testLanguage(WORK_EXPERIENCE_DESC)}
        </p>
        <div className={styles.separatorContainer}>
          <hr className={styles.separatorLine} />
          <hr className={styles.separatorLine} />
        </div>
        <h4 style={{fontWeight:'bold'}}>{testLanguage(GROUP_PROJECT)}</h4>
        <h5 style={{fontWeight:'bold'}}>Codenet | Henry</h5>
        <Chip label={testLanguage(ONE_MONTH)}/>
        <p style={{marginTop:'0.7rem'}}>
        {testLanguage(GROUP_PROJECT_DESC)}
        </p>
      </div>
    </div>
  );
};

export default Resume;
