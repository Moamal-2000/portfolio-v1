import s from "./ContactForm.module.scss";

const ContactForm = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      ContactForm
    </form>
  );
};
export default ContactForm;
