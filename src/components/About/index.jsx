import { AboutContainer } from "./styles";
import CodeCoffee from "/src/assets/images/codecoffee.png";
import HtmlIcon from "/src/assets/icons/1.png";
import CssIcon from "/src/assets/icons/2.png";
import JsIcon from "/src/assets/icons/3.png";
import ReactIcon from "/src/assets/icons/4.png";
import EmotionIcon from "/src/assets/icons/5.png";
import TailwindIcon from "/src/assets/icons/6.png";
import PythonIcon from "/src/assets/icons/7.png";
import PhotoshopIcon from "/src/assets/icons/8.png";
import FigmaIcon from "/src/assets/icons/9.png";
const About = () => {
  return (
    <div className={AboutContainer}>
      <div>
        <h1>🙆‍♂️ About Me</h1>
      </div>
      <div className="about--content">
        <div>
          <img src={CodeCoffee} alt="" />
        </div>
        <div className="about--text">
          <p className="about--desc">
            I&apos;m a frontend developer based in Jakarta, Indonesia and also a
            information technology student. I have been freelancing graphic
            design while studying programming at university and I want to try
            new things including this software development field.
          </p>
          <hr />
          <h2>Knowledge</h2>
          <div className="about--icon">
            <img src={HtmlIcon} alt="" className="icon--item" />
            <img src={CssIcon} alt="" className="icon--item" />
            <img src={JsIcon} alt="" className="icon--item" />
            <img src={ReactIcon} alt="" className="icon--item" />
            <img src={EmotionIcon} alt="" className="icon--item" />
            <img src={TailwindIcon} alt="" className="icon--item" />
            <img src={PythonIcon} alt="" className="icon--item" />
            <img src={PhotoshopIcon} alt="" className="icon--item" />
            <img src={FigmaIcon} alt="" className="icon--item" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
