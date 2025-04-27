import { useState } from "react";
import ReturnButton from "../../../components/Buttons/ReturnButton";
import { useNavigate } from "react-router-dom";

interface CheckOutFormData {
  entryTime: string;
  exitTime: string;
  comment: string;
}

const CheckOutForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CheckOutFormData>({
    entryTime: "", // TODO añadir la hora real
    exitTime: "",
    comment: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/checkout-confirmation", {
      state: { exitTime: formData.exitTime },
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
        <input type="time" id="entryTime" value={formData.entryTime} disabled />
      </div>
      <div className="form-group">
        <label htmlFor="exitTime">Hora de salida</label>
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
          rows={5}
        />
      </div>
      <div className="button-group">
        <button type="submit" className="action-button">
          Check out
        </button>
        <ReturnButton />
      </div>
    </form>
  );
};

export default CheckOutForm;
