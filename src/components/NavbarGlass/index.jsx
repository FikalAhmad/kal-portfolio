import { useState } from "react";
import { NavbarGlassContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const NavbarGlass = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={NavbarGlassContainer}>
      <div className="navbar--container">
        <div className="navbar--icon" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`list--menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="item--ul">
            <li className="item--li" onClick={() => scrollToSection("profile")}>
              Home
            </li>
            <li className="item--li" onClick={() => scrollToSection("about")}>
              About
            </li>
            <li className="item--li" onClick={() => scrollToSection("project")}>
              Project
            </li>
            <li className="item--li" onClick={() => navigate("comingsoon")}>
              Blog
            </li>
            <li className="item--li" onClick={() => scrollToSection("contact")}>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarGlass;
