import Typical from "react-typical";
import styles from "./Profile.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import { GET_RESUME, HIRE_ME, HI_IM, PROFILE_DESC } from "../../utils/constants";

const Profile = () => {
  const { handleButtonClick, testLanguage } = useContext(GlobalContext);
  return (
    <div className={styles.homeContainer} id="homeId">
      <div className={styles.profileContainer}>
        <div className={styles.profileParent}>
          <div className={styles.profileDetails}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.4rem",
                }}
              >
                <div className={styles.colzIcon}>
                  <a href="mailto:andrescimma1@gmail.com">
                    <i class="far fa-envelope"></i>
                  </a>
                </div>
                <div className={styles.colzIcon}>
                  <a
                    href="https://www.linkedin.com/in/andres-cimma/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className={styles.colzIcon}>
                <a href="https://github.com/andrescimma1" target="_blank" rel="noopener noreferrer">
  <i class="fab fa-github"></i>
</a></div>
                
              </div>
            </div>

            <div className={styles.profileDetailsName}>
              <span className={styles.primaryText}>
                {" "}
                {testLanguage(HI_IM)} <span style={{ color: "red" }}>Andres</span>
              </span>
            </div>

            <div className={styles.profileDetailsRole}>
              <span className={styles.primaryText}>
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Frontend Developer 💻",
                      2000,
                      "Fullstack Developer 💻",
                      2000,
                    ]}
                    wrapper="p"
                  />
                </h1>
                <span className={styles.profileRoleTagline}>
                  {testLanguage(PROFILE_DESC)}
                </span>
              </span>
            </div>
            <div className={styles.profileOptions}>
              <button
                className="btn primary-btn"
                style={{ margin: "0 0 0 28px" }}
                onClick={() =>
                  handleButtonClick(document.getElementById("contactMeId"))
                }
              >
                {""}
                {testLanguage(HIRE_ME)}{" "}
              </button>
              <a
                href="/assets/cv/CVAndresCimma.pdf"
                download={"CVAndresCimma.pdf"}
              >
                <button className="btn highlighted-btn">{testLanguage(GET_RESUME)}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
