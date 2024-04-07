import PropTypes from "prop-types";
import styles from "./Navitems.module.css";

// CSS STYLES
const list = [styles.list].join("");
const listItem = [styles.listItem].join("");

const Navitems = ({ closeNavbar }) => {
  const items = ["Home", "About", "Work", "Services", "Contact"];
  return (
    <ul className={list}>
      {items.map((item) => (
        <li className={listItem} key={item}>
          <a href={`#${item.toLowerCase()}`} onClick={closeNavbar}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

Navitems.propTypes = {
  closeNavbar: PropTypes.func,
};

export default Navitems;
