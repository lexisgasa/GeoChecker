import ContactPageForm from "../../components/ContactPageForm/ContactPageForm";

const ContactPage = () => {
  return (
    <>
      <h2>Contactar Administrador</h2>
      <div className="contact-content">
        <p>
          Si estás teniendo problemas para acceder al sistema, por favor
          contacta al administrador:
        </p>
        <ContactPageForm />
      </div>
    </>
  );
};

export default ContactPage;
