import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
// import Navbar from "../../components/Navbar";
import NavbarGlass from "../../components/NavbarGlass";
import Profile from "../../components/Profile";
import Project from "../../components/Project";
import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <>
      <NavbarGlass />
      <div className={HomeContainer}>
        <div id="profile">
          <Profile />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="project">
          <Project />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
