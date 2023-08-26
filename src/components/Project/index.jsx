import { CardProjectContainer } from "./styles";
import KopikanFeed from "/src/assets/images/kopikan-feed.png";
import GubukSantaiFeed from "/src/assets/images/gubuksantai-feed.png";
import LinkIcon from "/src/assets/icons/link.png";

const Project = () => {
  return (
    <div className={CardProjectContainer}>
      <h1>💻 Project</h1>
      <div className="project">
        <div className="project--container">
          <img src={KopikanFeed} alt="" className="project--image" />
          <div className="project--header">
            <p className="p--title">Kopikan Website</p>
            <img src={LinkIcon} alt="" className="icon--link" />
          </div>
          <p className="p--desc">
            This website is used to buy a product, namely several types of
            coffee drinks to facilitate transactions anywhere and also to avoid
            queues in the cafe.
          </p>
          <div className="p--techuse">
            <p>React JS</p>
            <p>Vite JS</p>
            <p>Emotion CSS</p>
            <p>Express JS</p>
          </div>
        </div>
        <div className="project--container">
          <img src={GubukSantaiFeed} alt="" className="project--image" />
          <div className="project--header">
            <p className="p--title">Gubuk Santai Website</p>
            <img src={LinkIcon} alt="" className="icon--link" />
          </div>
          <p className="p--desc">
            I made this website to fulfill the value of my web programming 1
            coursework. this landing page website is about my discord community
            called gubuk santai which is intended to gather, learn, and play.
          </p>
          <div className="p--techuse">
            <p>HTML5</p>
            <p>CSS</p>
            <p>Javascript</p>
          </div>
        </div>
        <div className="project--container">
          <img src={GubukSantaiFeed} alt="" className="project--image" />
          <div className="project--header">
            <p className="p--title">Dreams Note Website</p>
            <img src={LinkIcon} alt="" className="icon--link" />
          </div>
          <p className="p--desc">
            This web app-based notepad called dreams note is made to make notes
            or wishes that want to be realized as the name &ldquo;Dreams
            Note&ldquo;.
          </p>
          <div className="p--techuse">
            <p>React JS</p>
            <p>Vite JS</p>
            <p>Emotion CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
