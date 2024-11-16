import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { contactFormBg } from "src/Assets/images";
import s from "./ContactForm.module.scss";

const ContactForm = () => {
  const formRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  function sendMessage() {
    emailjs.sendForm("service_ro1lghg", "template_m25p1w3", formRef.current, {
      publicKey: "SyWSSmy9K9xVdF89p",
    });
  }

  return (
    <form className={s.contactForm} ref={formRef} onSubmit={handleSubmit}>
      <div className={s.form}>
        <div className={s.input}>
          <label htmlFor="name">Name</label>
          <input placeholder="Enter Your Name" type="text" />
        </div>

        <div className={s.input}>
          <label htmlFor="name">Email</label>
          <input placeholder="Enter Your Email" type="text" />
        </div>

        <div className={s.input}>
          <label htmlFor="name">Message</label>
          <textarea
            placeholder="Enter Your Message"
            name="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button type="submit" className={s.submitButton}>
          Submit
        </button>
      </div>

      <div className={s.imgHolder}>
        <img src={contactFormBg} alt="" />
      </div>
    </form>
  );
};
export default ContactForm;
