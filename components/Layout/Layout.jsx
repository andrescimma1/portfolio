import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import AboutMe from "../AboutMe/AboutMe";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Profile/>
      <Footer/>
      <AboutMe/>
    </div>
  );
};

export default Layout;
