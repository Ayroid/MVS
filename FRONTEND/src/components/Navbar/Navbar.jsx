import { useState } from "react";

import styles from "./Navbar.module.css";

// IMPORT COMPONENTS
import Logo from "../Logo/Logo";
import Navitems from "./Navitems/Navitems";
import NavLogin from "./NavLogin/NavLogin";
import Socials from "../Socials/Socials";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");
const logoDiv = [styles.logoDiv].join("");
const navbarDiv = [styles.navbarDiv].join("");
const hamburgerDiv = [styles.hamburgerDiv].join("");
const mobDivSeparator = [styles.mobDivSeparator].join("");
const hamburger = [styles.hamburger].join("");
const hamburgerClose = [styles.hamburger, styles.hamburgerClose].join(" ");
const socialsDiv = [styles.socialsDiv].join("");

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavBar = () => {
    setOpen((prevOpen) => {
      const newOpen = !prevOpen;
      toggleNavBarJS(newOpen);
      return newOpen;
    });
  };

  const toggleNavBarJS = (isOpen) => {
    const navbarDiv = document.getElementById("navbarDiv");
    if (screen.width > 768) return;
    if (isOpen) {
      navbarDiv.style.display = "flex";
      navbarDiv.classList.remove(styles.scrollUp);
      navbarDiv.classList.add(styles.scrollDown);
    } else {
      navbarDiv.classList.remove(styles.scrollDown);
      navbarDiv.classList.add(styles.scrollUp);
      setTimeout(() => {
        navbarDiv.style.display = "none";
      }, 400);
    }
  };

  return (
    <div className={mainDiv} id="mainDiv">
      <div className={hamburgerDiv} onClick={toggleNavBar}>
        {open ? (
          <img
            className={hamburger}
            src="/icons/hamburgercross.png"
            alt="hamburger"
          />
        ) : (
          <img
            className={hamburgerClose}
            src="/icons/hamburger.png"
            alt="hamburger"
          />
        )}
      </div>
      <div className={navbarDiv} id="navbarDiv">
        <div className={logoDiv}>
          <Logo />
        </div>
        <hr className={mobDivSeparator} />
        <Navitems closeNavbar={() => toggleNavBar()} />
        <hr className={mobDivSeparator} />
        <NavLogin closeNavbar={() => toggleNavBar()} />
        <hr className={mobDivSeparator} />
        <div className={socialsDiv}>
          <Socials orientation={"row"} closeNavbar={() => toggleNavBar()} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
