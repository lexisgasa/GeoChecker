import { useState } from "react";

interface CheckInFormData {
  entryTime: string;
  comment: string;
}

const CheckInForm = () => {
  const [formData, setFormData] = useState<CheckInFormData>({
    entryTime: "",
    comment: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: logica
    console.log("Check in:", formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="check-in-form">
      <div className="form-group">
        <label htmlFor="entryTime">Hora de entrada</label>
        <input
          type="time"
          id="entryTime"
          value={formData.entryTime}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="exitTime">Hora de salida</label>
        <input type="time" id="exitTime" disabled />
      </div>
      <div className="form-group">
        <label htmlFor="comment">Comentario</label>
        <textarea
          id="comment"
          value={formData.comment}
          onChange={handleChange}
          rows={5}
        />
      </div>
    </form>
  );
};

export default CheckInForm;
