import { useState } from "react";
import styles from "./LoginPage.module.css";

// COMPONENTS
import Logo from "../../components/Logo/Logo";
import FormHeader from "../../components/FormHeader/FormHeader";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Socials from "../../components/Socials/Socials";
import NavigationButton from "../../components/NavigationButton/NavigationButton";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");
const backButton = [styles.backButton].join("");
const logoDiv = [styles.logoDiv].join("");
const formMainDiv = [styles.formMainDiv].join("");
const headerDiv = [styles.headerDiv].join("");
const formDiv = [styles.formDiv].join("");
const socialsDiv = [styles.socialsDiv].join("");
const formSection = [styles.formSection].join("");
const backgroundImage = [styles.backgroundImage].join("");
const gradientOverlay = [styles.gradientOverlay].join("");

const LoginPage = () => {
  // STATE VARIABLES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // VALUE UPDATERS

  const updatEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  // SUBMIT FORM

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className={mainDiv}>
      <div className={backButton}>
        <NavigationButton navigateTo="/" />
      </div>
      <div className={logoDiv}>
        <Logo />
      </div>
      <div className={formSection}>
        <div className={formMainDiv}>
          <div className={headerDiv}>
            <FormHeader
              preHeadingText="Great "
              preHeadingSpanText="to have you back!"
              headingText="Login in "
              headingSpanText="now"
              changePageText="Don't have an account? "
              changePageSpanText="SignUp"
            />
          </div>
          <form className={formDiv} onClick={submitForm}>
            <InputField
              id="email"
              type="email"
              placeholder=""
              inputLabel="Email"
              value={email}
              valueUpdater={updatEmail}
              required={true}
            />
            <InputField
              id="password"
              type="password"
              placeholder=""
              inputLabel="Password"
              value={password}
              valueUpdater={updatePassword}
              required={true}
            />
            <SubmitButton text="Login" />
          </form>
          <div className={socialsDiv}>
            <Socials orientation={"row"} gap={"1.25rem"} />
          </div>
        </div>
      </div>
      <div className={backgroundImage}>
        <div className={gradientOverlay}></div>
        <img src="/images/brand/loginpage.jpg" alt="login" />
      </div>
    </div>
  );
};

export default LoginPage;
