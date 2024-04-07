import PropTypes from "prop-types";
import styles from "./SectionHeader.module.css";

// CSS STYLES
const heading = [styles.heading].join(" ");

const SectionHeader = ({ headingTitle }) => {
  return <h1 className={heading}>{headingTitle}</h1>;
};

SectionHeader.propTypes = {
  headingTitle: PropTypes.string.isRequired,
};

export default SectionHeader;
