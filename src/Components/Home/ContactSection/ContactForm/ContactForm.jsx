import { contactFormBg } from "src/Assets/images";
import s from "./ContactForm.module.scss";

const ContactForm = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
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
