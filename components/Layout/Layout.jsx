import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Experience from "../Experience/Experience";
import SelectedWork from "../SelectedWork/SelectedWork";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

export default function Layout() {
  return (
    <>
      <a href="#main" className="skipLink">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <SelectedWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
