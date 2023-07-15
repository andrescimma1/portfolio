import Typical from "react-typical";
import styles from "./Profile.module.css";

const Profile = () => {
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
              </div>
            </div>

            <div className={styles.profileDetailsName}>
              <span className={styles.primaryText}>
                {" "}
                Hola, soy <span style={{ color: "red" }}>Andres</span>
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
                  Una descripcion sobre mi bla bla bla bla bla bla.
                </span>
              </span>
            </div>
            <div className={styles.profileOptions}>
              <button
                className="btn primary-btn"
                style={{ margin: "0 0 0 28px" }}
              >
                {""}
                Hire Me{" "}
              </button>
              <a
                href="/assets/cv/CVAndresCimma.pdf"
                download={"CVAndresCimma.pdf"}
              >
                <button className="btn highlighted-btn">Get resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
