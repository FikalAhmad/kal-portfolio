import { FooterContainer } from "./styles";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={FooterContainer}>
      <p>Created by Ahmad Fikri Haikal | My Spirit | My Intention </p>
      <button
        className="footer--btn"
        onClick={() => scrollToSection("profile")}
      >
        Back to Top
      </button>
    </div>
  );
};

export default Footer;
