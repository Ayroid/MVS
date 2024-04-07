import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

// CSS STYLES
const logoImage = [styles.logoImage].join("");

// COMPONENT

const Logo = () => {
  return (
    <Link to="/">
      <img
        className={logoImage}
        src="/images/brand/motiverse-large.jpg"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
