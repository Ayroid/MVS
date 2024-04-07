import PropTypes from "prop-types";
import styles from "./Service.module.css";

// CSS STYLES
const imagePlaceHolder = [styles.imagePlaceHolder].join("");
const serviceImage = [styles.serviceImage].join("");
const overlay = [styles.overlay].join("");
const serviceTitle = [styles.serviceTitle].join("");

const Service = ({ url, gridRow, gridColumn, serviceName }) => {
  return (
    <div
      className={imagePlaceHolder}
      style={{ gridRow: gridRow, gridColumn: gridColumn }}
    >
      <img className={serviceImage} src={url} alt={serviceName} />
      <div className={overlay}>
        <p className={serviceTitle}>{serviceName}</p>
        <img src="/icons/arrowCircle.png" alt="arrow" />
      </div>
    </div>
  );
};

Service.propTypes = {
  url: PropTypes.string.isRequired,
  gridRow: PropTypes.string,
  gridColumn: PropTypes.string,
  serviceName: PropTypes.string.isRequired,
};

export default Service;
