import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import AboutMe from "../AboutMe/AboutMe";
import { ContactUs } from "../ContactUs/ContactUs";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.homeContainer}>
        <Profile/>
        <Footer/>
      </div>
      <AboutMe/>
      <ContactUs/>
    </div>

  );
};

export default Layout;
