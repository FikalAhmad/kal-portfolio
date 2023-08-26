import { ContactContainer } from "./styles";
import ProfileAnime from "/src/assets/images/profile.png";
import EmailIcon from "/src/assets/icons/email-icon-blue.png";
import InstagramIcon from "/src/assets/icons/instagram-icon-blue.png";

const Contact = () => {
  return (
    <div className={ContactContainer}>
      <div className="container">
        <div className="contact--image">
          <img src={ProfileAnime} alt="" />
        </div>
        <div className="contact--text">
          <h1 className="contact--text-h1">🤝 Let&apos;s get in touch</h1>
          <p className="contact--text-p">
            Have any project ideas? Ask something?
          </p>
          <div className="contact--deeptext">
            <h1>Contact me via</h1>
            <div className="contact--direct">
              <img src={EmailIcon} alt="" />
              <p>fikaalm26@gmail.com</p>
            </div>
            <div className="contact--direct">
              <img src={InstagramIcon} alt="" />
              <p>@kalartarchive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
