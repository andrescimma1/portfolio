import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Resume from "../Resume/Resume";
import Projects from "../Projects/Projects";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.homeContainer}>
        <Profile/>
        <Footer/>
      </div>
      <AboutMe/>
      <Resume/>
      <Projects/>
      <ContactMe/>
    </div>

  );
};

export default Layout;
