import { ChangeEvent } from "react";
import { IdUserData } from "../../types";
import { useNavigate } from "react-router-dom";
import ReturnButton from "../../../components/Buttons/ReturnButton";

interface WorkerReviewFormProps {
  workerData: IdUserData;
  setWorkerData: (workerData: IdUserData) => void;
}

const WorkerReviewForm = ({
  workerData,
  setWorkerData,
}: WorkerReviewFormProps): React.ReactElement => {
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWorkerData({
      ...workerData,
      userId: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (workerData.userId.trim()) {
      navigate(`/worker-review-user/${workerData.userId}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="workerId">ID del trabajador</label>
        <input
          type="text"
          id="workerId"
          value={workerData.userId}
          onChange={handleChange}
          required
        />
      </div>
      <div className="button-group">
        <button type="submit" className="action-button">
          Consultar
        </button>
        <ReturnButton />
      </div>
    </form>
  );
};

export default WorkerReviewForm;
