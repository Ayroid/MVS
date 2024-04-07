import PropTypes from "prop-types";
import styles from "./NavLogin.module.css";
import { Link } from "react-router-dom";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");
const login = [styles.login, styles.button].join(" ");
const signup = [styles.signup, styles.button].join(" ");

const NavLogin = ({ closeNavbar }) => {
  return (
    <div className={mainDiv}>
      <Link className={login} to="/login" onClick={closeNavbar}>
        Login
      </Link>
      <Link className={signup} to="/signup" onClick={closeNavbar}>
        SignUp
      </Link>
    </div>
  );
};

NavLogin.propTypes = {
  closeNavbar: PropTypes.func,
};

export default NavLogin;
