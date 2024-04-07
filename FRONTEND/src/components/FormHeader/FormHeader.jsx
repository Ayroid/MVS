import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FormHeader.module.css";

// CSS STYLES
const heading = [styles.heading].join("");
const preHeading = [styles.preHeading].join("");
const headingSpan = [styles.headingSpan].join("");
const changePage = [styles.changePage].join("");

const FormHeader = ({
  preHeadingText,
  preHeadingSpanText,
  headingText,
  headingSpanText,
  changePageText,
  changePageSpanText,
}) => {
  return (
    <>
      <h4 className={preHeading}>
        <span className={headingSpan}>{preHeadingText}</span>
        {preHeadingSpanText}
      </h4>
      <h1 className={heading}>
        {headingText}
        <span className={headingSpan}>{headingSpanText}</span>
      </h1>
      <h4 className={changePage}>
        {changePageText}
        <Link
          to={`/${changePageSpanText.toLowerCase()}`}
          className={headingSpan}
        >
          {changePageSpanText}
        </Link>
      </h4>
    </>
  );
};

FormHeader.propTypes = {
  preHeadingText: PropTypes.string.isRequired,
  preHeadingSpanText: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
  headingSpanText: PropTypes.string.isRequired,
  changePageText: PropTypes.string.isRequired,
  changePageSpanText: PropTypes.string.isRequired,
};

export default FormHeader;
