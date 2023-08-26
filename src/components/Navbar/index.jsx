import { useEffect, useState } from "react";
import { NavbarContainer } from "./styles";
import logo from "/src/assets/images/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [scrollingTimeout, setScrollingTimeout] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingUp = prevScrollPos > currentScrollPos;

      setShowNavbar(scrollingUp || currentScrollPos < 10);

      // Mengatur timeout untuk menampilkan kembali navbar setelah selesai scroll
      if (scrollingTimeout) {
        clearTimeout(scrollingTimeout);
      }
      setScrollingTimeout(
        setTimeout(() => {
          setShowNavbar(true);
        }, 100) // Ubah angka ini sesuai kebutuhan
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollingTimeout);
    };
  }, [prevScrollPos, scrollingTimeout]);

  return (
    <div className={NavbarContainer}>
      <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
        <div className="image--container">
          <img src={logo} alt="" className="image--img" />
        </div>
        {/* <div
        className={`${isActive ? "item--wrap_active" : "item--wrap_disable"}`}
      > */}
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
          <li className="item--li">Blog</li>
          <li className="item--li">Contact</li>
        </ul>
        {/* </div> */}
        {/* <div className="burger--icon" onClick={() => setIsActive(!isActive)}>
        <span className="burger--item" />
        <span className="burger--item" />
        <span className="burger--item" />
      </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
