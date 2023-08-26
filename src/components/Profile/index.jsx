import { Link } from "react-router-dom";
import { ProfileContainer } from "./styles";
import MyPhoto from "/src/assets/images/kalprofilebw.jpeg";

const Profile = () => {
  return (
    <>
      <div className={ProfileContainer}>
        <div className="profile--container">
          <div className="profile--image-wrapper">
            <img src={MyPhoto} alt="" className="profile--image" />
          </div>
          <div className="profile--text">
            <p className="p--name">Hi, I&apos;m 👋</p>
            <p className="p--name">AHMAD FIKRI HAIKAL</p>
            <p className="p--desc">Frontend Developer</p>
            <div className="p--button-wrap">
              <button className="p--button">
                <Link to="mailto:fikaalm26@gmail.com" className="link">
                  Hire Me
                </Link>
              </button>
              <button className="p--button">
                <Link to="/comingsoon" className="link">
                  Download CV
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
