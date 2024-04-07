import styles from "./About.module.css";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");

const About = () => {
  return (
    <div className={mainDiv}>
      <p>
        Welcome to <span>MOTIVERSE</span>, your daily source of motivation and
        curated products for success. We&apos;re more than a platform;
        we&apos;re your dedicated ally, offering inspiring posts, articles, and
        exclusive merchandise to elevate your mindset. Explore our carefully
        curated collection designed to reflect your commitment to growth in
        every aspect of life. Join our community, share your successes, and let
        MOTIVERSE be your guide on the path to success – where motivation meets
        lifestyle.
      </p>
    </div>
  );
};

export default About;
