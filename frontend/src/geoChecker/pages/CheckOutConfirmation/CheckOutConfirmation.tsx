import ReturnButton from "../../../components/Buttons/ReturnButton";
import { useLocation } from "react-router-dom";

const CheckOutConfirmation = () => {
  const location = useLocation();
  const exitTime = location.state?.exitTime || "";

  return (
    <>
      <h2>Check out</h2>
      <div className="general-form action-list">
        <p>
          Se ha registrado la hora de salida a las <strong>{exitTime}</strong>
        </p>
        <ReturnButton />
      </div>
    </>
  );
};

export default CheckOutConfirmation;
