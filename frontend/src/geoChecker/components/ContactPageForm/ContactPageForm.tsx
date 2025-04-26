import { ContactFormData } from "../../types";
import { useState } from "react";
import ReturnButton from "../../../components/Buttons/ReturnButton";
import "./ContactPageForm.css";

export default function ContactPageForm() {
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    username: "",
    description: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Logica
    console.log("Form submitted:", contactFormData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactFormData((currentFormData) => ({
      ...currentFormData,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          value={contactFormData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descripción del problema</label>
        <textarea
          id="description"
          value={contactFormData.description}
          onChange={handleChange}
          required
          rows={5}
        />
      </div>
      <div className="button-group">
        <button type="submit" className="submit-button">
          Enviar
        </button>
        <ReturnButton />
      </div>
    </form>
  );
}
