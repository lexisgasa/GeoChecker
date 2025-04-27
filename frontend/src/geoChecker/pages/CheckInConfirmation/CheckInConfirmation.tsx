import ReturnButton from "../../../components/Buttons/ReturnButton";
import { useLocation } from "react-router-dom";

const CheckInConfirmation = () => {
  const location = useLocation();
  const entryTime = location.state?.entryTime || "";

  return (
    <>
      <h2>Check in</h2>
      <div className="general-form action-list">
        <p>
          Se ha registrado la hora de entrada a las <strong>{entryTime}</strong>
        </p>
        <ReturnButton />
      </div>
    </>
  );
};

export default CheckInConfirmation;
