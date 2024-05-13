import Navbar from "../components/Navbar";
import NavbarDesktop from "../components/NavbarDesktop";
import MainHero from "../components/MainHero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/footer";

function Home() {
    return (
    <>
      <Navbar />
      <NavbarDesktop />
      <MainHero />
      <Projects />
      <Skills/>
      <AboutMe />
      <Footer />
    </>
  );
}

export default Home;
