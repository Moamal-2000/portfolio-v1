import SectionTitle from "../../Shared/SmallComponents/SectionTitle/SectionTitle";
import ContactForm from "./ContactForm/ContactForm";
import s from "./ContactSection.module.scss";

const ContactSection = () => {
  return (
    <section className={s.contactSection}>
      <div className="container">
        <SectionTitle
          name="Contact 📞"
          description={`Feel free to Contact me by submitting the form below and
          I will get back to you as soon as possible`}
        />

        <ContactForm />
      </div>
    </section>
  );
};
export default ContactSection;
