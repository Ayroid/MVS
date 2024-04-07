import styles from "./AboutPage.module.css";

// IMPORT COMPONENTS
import About from "../../components/About/About";
import SectionSeparator from "../../components/SectionSeparator/SectionSeparator";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");

const AboutPage = () => {
  return (
    <div className={mainDiv} id="about"> 
      <SectionSeparator />
      <About />
    </div>
  );
};

export default AboutPage;
