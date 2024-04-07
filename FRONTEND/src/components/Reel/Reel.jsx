import PropTypes from "prop-types";
import styles from "./Reel.module.css";

// CSS STYLES
const iframeStyle = [styles.iframeStyle].join(" ");

const Reel = ({ title, url }) => {
  return <iframe className={iframeStyle} title={title} src={url}></iframe>;
};

Reel.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Reel;
