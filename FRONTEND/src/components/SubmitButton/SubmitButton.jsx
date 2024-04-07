import PropTypes from "prop-types";
import styles from "./SubmitButton.module.css";

// CSS STYLES
const formButton = [styles.formButton].join("");

const SubmitButton = ({ text }) => {
  return (
    <button className={formButton} type="submit">
      {text}
    </button>
  );
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubmitButton;
