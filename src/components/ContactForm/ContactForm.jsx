import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [text, setTest] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setMail(e.target[1].value);
    setTest(e.target[2].value);
    setShowDetails(true);
  };

  const displayData = () => {};

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="Via Support Chat"
            icon={<MdMessage fontSize="1.5rem" />}
          />
          <Button text="Via Support Call" icon={<IoCall fontSize="1.5rem" />} />
        </div>

        <Button
          isOutline={true}
          text="Via Email Form"
          icon={<IoMdMail fontSize="1.5rem" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="mail" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Button text="Submit" />
            {showDetails && (
              <div className={`${styles.displayname} ${styles.fadeIn}`}>
                <h1>Your details are:</h1>
                <p>{`Your name is ${name}, your Email ID is ${mail} and your text was ${text}`}</p>
              </div>
            )}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Service.svg" alt="Contact Image" />
      </div>
    </section>
  );
};

export default ContactForm;
