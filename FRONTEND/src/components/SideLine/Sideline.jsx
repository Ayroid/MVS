import { useEffect, useState } from "react";
import styles from "./Sideline.module.css";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");
const verticalLine = [styles.verticalLine].join("");
const sideLineText = [styles.sideLineText].join("");

const Sideline = () => {
  const [currentText, setCurrentText] = useState("Inspire");

  useEffect(() => {
    const words = ["Inspire", "Create", "Innovate", "Learn", "Grow"];
    let i = 1;

    const intervalId = setInterval(() => {
      setCurrentText(words[i++ % 5]);
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className={mainDiv}>
      <hr className={verticalLine} />
      <p className={sideLineText} id="sideLineText">
        {currentText}
      </p>
    </div>
  );
};

export default Sideline;
