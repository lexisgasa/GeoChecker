import React, { useState } from "react";
import ReturnButton from "../../../components/Buttons/ReturnButton";
import { ReviewFormData } from "../../types";

const ReviewForm = (): React.ReactElement => {
  const [formData, setFormData] = useState<ReviewFormData>({
    date: "",
    entryTime: "",
    exitTime: "",
    comment: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO logica
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">Elegir día</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="entryTime">Check in</label>
        <input
          type="time"
          id="entryTime"
          value={formData.entryTime}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="exitTime">Check out</label>
        <input
          type="time"
          id="exitTime"
          value={formData.exitTime}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="comment">Comentario</label>
        <textarea
          id="comment"
          value={formData.comment}
          onChange={handleChange}
          required
          rows={5}
        />
      </div>

      <div className="button-group">
        <button type="submit" className="action-button">
          Enviar revisión
        </button>
        <ReturnButton />
      </div>
    </form>
  );
};

export default ReviewForm;
