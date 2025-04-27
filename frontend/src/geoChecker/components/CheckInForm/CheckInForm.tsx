import { useState } from "react";
import ReturnButton from "../../../components/Buttons/ReturnButton";
import { useNavigate } from "react-router-dom";

interface CheckInFormData {
  entryTime: string;
  comment: string;
}

const CheckInForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CheckInFormData>({
    entryTime: "",
    comment: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/checkin-confirmation", {
      state: { entryTime: formData.entryTime },
    });
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
    <form onSubmit={handleSubmit}>
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
      <div className="button-group">
        <button type="submit" className="action-button">
          Check in
        </button>
        <ReturnButton />
      </div>
    </form>
  );
};

export default CheckInForm;
