import { useNavigate } from "react-router";

const ReturnButton = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(-1)} className="back-button">
      Volver
    </button>
  );
};

export default ReturnButton;
