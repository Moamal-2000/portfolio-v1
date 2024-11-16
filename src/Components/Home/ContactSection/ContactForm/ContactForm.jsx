import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { contactFormBg } from "src/Assets/images";
import s from "./ContactForm.module.scss";

const ContactForm = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  async function sendMessage() {
    try {
      emailjs.sendForm("service_ro1lghg", "template_m25p1w3", formRef.current, {
        publicKey: "SyWSSmy9K9xVdF89p",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={s.contactForm} ref={formRef} onSubmit={handleSubmit}>
      <div className={s.form}>
        <div className={s.input}>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Enter Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={s.input}>
          <label htmlFor="name">Email</label>
          <input
            placeholder="Enter Your Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={s.input}>
          <label htmlFor="name">Message</label>
          <textarea
            placeholder="Enter Your Message"
            name="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
