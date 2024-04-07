import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./NavigationButton.module.css";

// CSS STYLES
const buttonStyle = [styles.buttonStyle].join("");

const NavigationButton = ({ rotate, navigateTo }) => {
  return (
    <Link to={navigateTo} className={buttonStyle} style={{ rotate: rotate }}>
      <img src="/icons/backArrow.png" alt="arrow" />
    </Link>
  );
};

NavigationButton.propTypes = {
  rotate: PropTypes.number,
  navigateTo: PropTypes.string.isRequired,
};

export default NavigationButton;
