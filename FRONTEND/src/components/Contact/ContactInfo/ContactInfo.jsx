import styles from "./ContactInfo.module.css";

// IMPORT COMPONENTS

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");
const heading = [styles.heading, "noSelection"].join(" ");
const contactInfo = [styles.contactInfo].join("");
const contactInfoText = [styles.contactInfoText].join("");
const contactInfoFields = [styles.contactInfoFields].join("");
const contactInfoField = [styles.contactInfoField].join("");
const contactInfoFieldSpan = [
  styles.contactInfoFieldSpan,
  "allowSelection",
].join(" ");

const ContactInfo = () => {
  return (
    <div className={mainDiv}>
      <h1 className={heading}>Contact</h1>
      <div className={contactInfo}>
        <p className={contactInfoText}>
          Need assistance or interested in collaborating? <br />
          Our team is here to help! <br />
          Contact us using the details below:
        </p>
        <div className={contactInfoFields}>
          <p className={contactInfoField}>
            Location<span className={contactInfoFieldSpan}>India</span>
          </p>
          <p className={contactInfoField}>
            Phone<span className={contactInfoFieldSpan}>+91 8630273311</span>
          </p>
          <p className={contactInfoField}>
            Email{" "}
            <span className={contactInfoFieldSpan}>motiversemvs@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
