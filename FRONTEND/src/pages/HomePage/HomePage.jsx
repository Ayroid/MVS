import styles from "./HomePage.module.css";

// IMPORT COMPONENTS
import Socials from "../../components/Socials/Socials";
import Sideline from "../../components/SideLine/Sideline";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");
const title = [styles.title, "noSelection"].join(" ");
const socialsDiv = [styles.socialsDiv].join("");
const sidelineDiv = [styles.sidelineDiv, "noSelection"].join(" ");

const HomePage = () => {
  return (
    <div className={mainDiv} id="home">
      <h1 className={title}>
        <span>MOTI</span>VERSE
      </h1>
      <div className={socialsDiv}>
        <Socials />
      </div>
      <div className={sidelineDiv}>
        <Sideline />
      </div>
    </div>
  );
};

export default HomePage;
