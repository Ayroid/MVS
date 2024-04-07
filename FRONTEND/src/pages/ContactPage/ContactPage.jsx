import styles from "./ContactPage.module.css";

// IMPORT COMPONENTS
import ContactInfo from "../../components/Contact/ContactInfo/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm/ContactForm";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");

const ContactPage = () => {
  return (
    <div className={mainDiv} id="contact">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
