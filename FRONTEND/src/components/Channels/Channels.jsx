import PropTypes from "prop-types";
import styles from "./Channels.module.css";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");
const channelIcon = [styles.channelIcon].join("");
const channelText = [styles.channelText].join("");
const iconsDiv = [styles.iconsDiv].join("");

const Channels = ({ imageUrl, altText, title, instalink, youtubelink }) => {
  return (
    <div className={mainDiv}>
      <img className={channelIcon} src={imageUrl} alt={altText} />
      <div className={channelText}>{title}</div>
      <div className={iconsDiv}>
        <a href={instalink} target="_blank" rel="noreferrer">
          <img src="/icons/instagram.png" alt="instagram" />
        </a>
        <a href={youtubelink} target="_blank" rel="noreferrer">
          <img src="/icons/youtube.png" alt="youtube" />
        </a>
      </div>
    </div>
  );
};

Channels.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instalink: PropTypes.string.isRequired,
  youtubelink: PropTypes.string.isRequired,
};

export default Channels;
