import styles from "./ContactForm.module.css";
import { useState } from "react";

// COMPONENTS
import InputField from "../../InputField/InputField";
import TextAreaField from "../../TextAreaField/TextAreaField";
import SubmitButton from "../../SubmitButton/SubmitButton";

// CSS STYLES
const mainDiv = [styles.mainDiv].join("");
const heading = [styles.heading].join("");
const formDiv = [styles.formDiv].join("");

const ContactForm = () => {
  // STATE VARIABLES

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // VALUE UPDATERS

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateSubject = (e) => {
    setSubject(e.target.value);
  };

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  // SUBMIT FORM

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  // JSX

  return (
    <div className={mainDiv}>
      <h1 className={heading}>Write to us!</h1>
      <form className={formDiv} onSubmit={submitForm}>
        <InputField
          id="name"
          type="text"
          placeholder=""
          inputLabel="Name"
          value={name}
          valueUpdater={updateName}
          required={true}
        />
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
          id="subject"
          type="text"
          placeholder=""
          inputLabel="Subject"
          value={subject}
          valueUpdater={updateSubject}
          required={true}
        />
        <TextAreaField
          id="message"
          cols="30"
          rows="10"
          placeholder=""
          value={message}
          valueUpdater={updateMessage}
          inputLabel="Message"
          required={true}
        />
        <SubmitButton text="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
