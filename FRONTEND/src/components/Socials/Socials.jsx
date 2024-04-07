import styles from "./Socials.module.css";
import PropTypes from "prop-types";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");

// LINKS & IMAGES
const socials = [
  {
    link: "https://www.instagram.com/motiversemvs?igsh=MWY1bHdoOGE1YnExbg==",
    image: "/icons/instagram.png",
    alt: "instagram",
  },
  {
    link: "https://youtube.com/@-Motiverse?si=z6wcAas593s0c2d2",
    image: "/icons/youtube.png",
    alt: "youtube",
  },
  {
    link: "https://discord.com/invite/ks6ZKNvP",
    image: "/icons/discord.png",
    alt: "discord",
  },
];

const Socials = ({ orientation, closeNavbar, gap }) => {
  return (
    <div className={mainDiv} style={{ flexDirection: orientation, gap: gap }}>
      {socials.map((item) => (
        <a
          key={item.alt}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          onClick={closeNavbar}
        >
          <img src={item.image} alt={item.alt} />
        </a>
      ))}
    </div>
  );
};

Socials.propTypes = {
  orientation: PropTypes.string,
  closeNavbar: PropTypes.func,
  gap: PropTypes.string,
};

export default Socials;
